import { View, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import SHDNAView from "../Components/SHDNAView";
import { Colors } from "../../assets/SHDNAColors";
import SHDNANewsBlock from "../Components/SHDNANewsBlock";
import SHDNAText from "../Components/SHDNAText";
import AddSVG from "@/assets/RNSvgs/AddSVG";
import { useSheet } from "../Components/Sheet/SHDNASheetContext";
import SHDNACreateArticleSubview from "./SHDNACreateArticleSubview";
import { useSHDNANewsList } from "../hooks/useSHDNANewsList";

export default function SHDNAHomeView() {
  const { openSheet } = useSheet();

  const [data, refetch] = useSHDNANewsList();

  const SecondaryButtons = () => {
    const [isBeingPressed, setIsBeingPressed] = useState(false);

    return (
      <Pressable
        onPressIn={() => setIsBeingPressed(true)}
        onPressOut={() => {
          setIsBeingPressed(false);
          openSheet({
            content: <SHDNACreateArticleSubview refetch={refetch} />,
            title: "Create new Article",
          });
        }}
      >
        <AddSVG
          iconColor={isBeingPressed ? Colors.Gray2 : "#000"}
          style={{ transform: [{ scale: 0.75 }] }}
        />
      </Pressable>
    );
  };

  let news = data.news ?? [];

  return (
    <SHDNAView title="News" secondaryButtons={<SecondaryButtons />}>
      <React.Suspense fallback={<SHDNAText>Loading...</SHDNAText>}>
        {news.length > 0 ? (
          <View style={styles.grid}>
            {news.map((newsItem, index) => {
              return (
                <SHDNANewsBlock
                  key={index}
                  SHDNANewsBlockKey={newsItem}
                  refetch={refetch}
                />
              );
            })}
          </View>
        ) : (
          <SHDNAText>{"No News :("}</SHDNAText>
        )}
      </React.Suspense>
    </SHDNAView>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row",
    gap: 50,
    padding: 10,
  },
});
