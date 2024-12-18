import {
  Animated,
  Easing,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { BlurView } from "expo-blur";
import SHDNATextInput from "../Components/SHDNATextInput";
import { useEffect, useRef, useState } from "react";
import Cross from "../../assets/RNSvgs/Cross";
import { Colors } from "../../assets/SHDNAColors";
import { useFloatingView } from "../Components/FloatingView/SHDNAFloatingViewContext";
import SHDNABlock from "../Components/SHDNABlock";
import { useSubview } from "../Components/Subview/SHDNASubviewContext";
import SHDNAText from "../Components/SHDNAText";

export default function SHDNASearchView() {
  const [search, setSearch] = useState<string>("");

  const { closeFloatingView } = useFloatingView();

  const opacityRef = useRef(new Animated.Value(0)).current;

  const HEADER_ELEVATION = 30;
  const headerElevation = useRef(new Animated.Value(HEADER_ELEVATION)).current;

  useEffect(() => {
    Animated.timing(opacityRef, {
      toValue: 1,
      duration: 200,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
    Animated.timing(headerElevation, {
      toValue: 0,
      duration: 200,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View style={{ ...styles.container, opacity: opacityRef }}>
      <BlurView
        style={styles.blurBackground}
        intensity={50}
        tint="light"
        onTouchEnd={() => Keyboard.dismiss()}
      >
        <View
          style={{
            paddingTop: 20,
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Animated.View
            onTouchEnd={(e) => {
              e.stopPropagation();
            }}
            style={{
              ...styles.header,
              transform: [{ translateY: headerElevation }],
            }}
          >
            <SHDNATextInput
              onChange={(input: string) => setSearch(input)}
              value={search}
              placeholder="Type something"
            />
            <View
              style={styles.closeButton}
              onTouchEnd={() => {
                Animated.timing(headerElevation, {
                  toValue: HEADER_ELEVATION,
                  duration: 200,
                  easing: Easing.out(Easing.quad),
                  useNativeDriver: false,
                }).start();
                Animated.timing(opacityRef, {
                  toValue: 0,
                  duration: 200,
                  easing: Easing.out(Easing.quad),
                  useNativeDriver: false,
                }).start(() => closeFloatingView());
              }}
            >
              <Cross iconColor={"#000"} width={20} />
            </View>
          </Animated.View>
          <SHDNAText style={styles.resultsText} fontWeight="SemiBold">
            Results:
          </SHDNAText>
          <ScrollView style={styles.searchList}>
            {[0, 1, 2, 3].map((item, index) => {
              return <SearchItems key={index} />;
            })}
          </ScrollView>
        </View>
      </BlurView>
    </Animated.View>
  );
}

const SearchItems = () => {
  const { closeFloatingView } = useFloatingView();
  const { openSubview } = useSubview();
  return (
    <SHDNABlock
      style={styles.searchItem}
      onClick={() => {
        openSubview("Hello SubView", <SHDNAText>Hello Subview</SHDNAText>);
      }}
    >
      <Image
        style={styles.searchItemImage}
        source={require("../../assets/PostPic.png")}
      />
    </SHDNABlock>
  );
};

const styles = StyleSheet.create({
  blurBackground: {
    flex: 1,
    paddingTop: "12.5%",
    paddingHorizontal: 20,
  },
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 20,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    gap: 15,
  },
  closeButton: {
    borderRadius: 10,
    height: 40,
    backgroundColor: Colors.Background,
    borderWidth: 1,
    aspectRatio: 1 / 1,
    borderColor: Colors.Gray2,
    alignItems: "center",
    justifyContent: "center",
  },
  resultsText: {
    color: "white",
    fontWeight: "600",
    marginTop: 15,
    fontSize: 14,
  },
  searchList: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: 20,
  },
  searchItem: {
    marginBottom: 15,
  },
  searchItemImage: {
    height: 80,
    width: 130,
    borderRadius: 20,
  },
});
