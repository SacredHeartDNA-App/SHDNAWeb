import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  Easing,
  PanResponder,
  Dimensions,
  Keyboard,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Colors } from "../../../assets/SHDNAColors";
import { useSubview } from "./SHDNASubviewContext";
import BackArrowSVG from "../../../assets/RNSvgs/BackArrowSVG";
import SHDNAButton, { ButtonStates } from "../SHDNAButton";
import SHDNAText from "../SHDNAText";

type SHDNASubviewProps = {
  title: string | ReactNode;
  secondaryButtons?: any;
  content: ReactNode;
};

export default function SHDNASubview({
  title,
  secondaryButtons,
  content,
}: SHDNASubviewProps) {
  const { popSubviewStack, isScrollBlocked } = useSubview();

  const opacityRef = useRef(new Animated.Value(0)).current;
  const headerHeight = useRef(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    headerHeight.current = height;
  };

  useEffect(() => {
    Animated.timing(opacityRef, {
      toValue: 1,
      duration: 200,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [opacityRef]);

  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const screenWidth = Dimensions.get("window").width;
  const touchThreshold = 30;
  const closeSlideSpeed = 1;
  const canDrag = useRef(false);
  const speedX = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt) => {
        const { pageX } = evt.nativeEvent;
        if (pageX <= touchThreshold) {
          canDrag.current = true;
          return true;
        }
        return false;
      },

      onPanResponderMove: (evt, gestureState) => {
        if (canDrag.current) {
          Animated.event(
            [null, { dx: position.x, dy: new Animated.Value(0) }],
            {
              useNativeDriver: false,
            }
          )(evt, gestureState);
          speedX.current = gestureState.vx;
        }
      },

      onPanResponderRelease: (evt) => {
        canDrag.current = false;
        const { pageX } = evt.nativeEvent;

        if (speedX.current >= closeSlideSpeed) {
          Animated.timing(position, {
            toValue: { x: screenWidth, y: 0 },
            easing: Easing.out(Easing.quad),
            duration: 200,
            useNativeDriver: false,
          }).start(() => popSubviewStack());
          speedX.current = 0;
          return;
        }

        if (pageX >= (screenWidth / 4) * 3) {
          Animated.timing(position, {
            toValue: { x: screenWidth, y: 0 },
            easing: Easing.out(Easing.quad),
            duration: 200,
            useNativeDriver: false,
          }).start(() => popSubviewStack());
        } else {
          Animated.timing(position, {
            toValue: { x: 0, y: 0 },
            easing: Easing.out(Easing.quad),
            duration: 200,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const scrollMenuOpacity = useRef(new Animated.Value(0)).current;
  const [yLastOffset, setYLastOffset] = useState(0);
  const [performingAnim, setPerformingAnim] = useState(false);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = e.nativeEvent.contentOffset.y;

    const ySpeed = yOffset - yLastOffset;

    if (!performingAnim) {
      if (yOffset <= 50 && ySpeed < 0) {
        setPerformingAnim(true);
        hideScrollMenu();
      } else if (yOffset >= 50 && ySpeed > 0) {
        setPerformingAnim(true);
        showScrollMenu();
      }
    }

    setYLastOffset(yOffset);
  };

  const showScrollMenu = () => {
    Animated.timing(scrollMenuOpacity, {
      toValue: 1,
      useNativeDriver: false,
      easing: Easing.ease,
      duration: 100,
    }).start(() => setPerformingAnim(false));
  };

  const hideScrollMenu = () => {
    Animated.timing(scrollMenuOpacity, {
      toValue: 0,
      useNativeDriver: false,
      easing: Easing.ease,
      duration: 100,
    }).start(() => setPerformingAnim(false));
  };

  const BackIcon = () => (
    <BackArrowSVG style={{ transform: [{ scale: 0.75 }] }} iconColor="black" />
  );

  const TopBar = (
    <View style={styles.topBar} onLayout={handleLayout}>
      <View style={styles.firstRow}>
        <SHDNAButton
          Icon={BackIcon}
          iconSize={30}
          onClick={() => {
            Animated.timing(position, {
              toValue: { x: screenWidth, y: 0 },
              duration: 200,
              easing: Easing.out(Easing.quad),
              useNativeDriver: false,
            }).start(() => popSubviewStack());
          }}
          state={ButtonStates.TRANSPARENT}
        />
        {typeof title == "string" ? (
          <SHDNAText fontWeight="SemiBold" style={styles.subtitle}>
            {title}
          </SHDNAText>
        ) : (
          title
        )}
      </View>
      <View
        style={{
          width: "auto",
          alignSelf: "center",
        }}
      >
        {secondaryButtons}
      </View>
    </View>
  );

  return (
    <>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          opacity: opacityRef,
          ...styles.wrapper,
          transform: position.getTranslateTransform(),
        }}
      >
        <ScrollView
          onScroll={handleScroll}
          style={styles.container}
          scrollEnabled={!isScrollBlocked}
        >
          {TopBar}
          <View style={{ paddingBottom: 75 }}>{content}</View>
        </ScrollView>
        <Animated.View
          style={[styles.onScrollTobBar, { opacity: scrollMenuOpacity }]}
        >
          {TopBar}
        </Animated.View>
      </Animated.View>
      <View style={styles.backgroundSafe} />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: Colors.Background,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: "12.5%",
  },
  firstRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  onScrollTobBar: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 15,
    height: "auto",
    paddingTop: 60,
    backgroundColor: Colors.Background,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flexDirection: "column",
  },
  topBar: {
    marginBottom: 10,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "flex-end",
    backgroundColor: Colors.Background,
  },
  backButton: {
    paddingRight: 10,
  },
  backgroundSafe: {
    backgroundColor: "#000",
    opacity: 0,
    position: "absolute",
    zIndex: 9,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
