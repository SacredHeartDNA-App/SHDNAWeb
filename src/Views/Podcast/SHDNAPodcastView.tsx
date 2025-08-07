import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { Suspense, useState } from "react";
import SHDNAText from "../../Components/SHDNAText";
import SHDNAVideoPlayer from "../../Components/SHDNAVideoPlayer";
import SHDNALoadingBlock from "../../Components/SHDNALoadingBlock";
import SHDNAPodcastList from "../../Components/Podcast/SHDNAPodcastList";
import SHDNAView from "../../Components/SHDNAView";
import AddSVG from "@/assets/RNSvgs/AddSVG";
import { Colors } from "@/assets/SHDNAColors";
import SHDNAPodcastChapter from "./SHDNAPodcastChapter";
import EditSVG from "@/assets/RNSvgs/EditSVG";
import { useSheet } from "@/src/Components/Sheet/SHDNASheetContext";
import SHDNAPodcastAdd from "./SHDNAPodcastAdd";
import Cross from "@/assets/RNSvgs/Cross";
import { useSHDNAPodcastList } from "@/src/hooks/useSHDNAPodcastList";

export interface PodcastEpisode {
  id: string;
  title: string;
  audio_url: string;
}

export type SHDNAPodcastViewProps = {};

export default function SHDNAPodcastView({}: SHDNAPodcastViewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode | null>(
    null
  );

  const { openSheet } = useSheet();

  const [episodes, refetch] = useSHDNAPodcastList();
  const podcastChapters = episodes.getPodcastEpisodes ?? [];

  const AddButton = () => {
    return (
      <Pressable
        onPress={() => {
          openSheet({
            title: "Add new Episode",
            content: <SHDNAPodcastAdd refetch={refetch} />,
          });
        }}
      >
        <AddSVG style={{ transform: [{ scale: 0.75 }] }} iconcolor="#000" />
      </Pressable>
    );
  };

  const handleSetSelectedEpisode = (ep: PodcastEpisode) => {
    setSelectedEpisode(ep);
    setIsEditing(false);
  };

  const EditButton = () => {
    if (selectedEpisode)
      return (
        <Pressable
          onPress={() => {
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? (
            <Cross style={{ transform: [{ scale: 0.75 }] }} iconcolor="#000" />
          ) : (
            <EditSVG
              style={{ transform: [{ scale: 0.75 }] }}
              iconcolor="#000"
            />
          )}
        </Pressable>
      );
  };

  return (
    <SHDNAView
      title="Podcast"
      secondaryButtons={[<AddButton />, <EditButton />]}
      scrollEnabled={false}
    >
      <View style={{ flexDirection: "row" }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.subview}>
            <Image
              source={require("../../../assets/imgs/Bar_background_horizontal.png")}
              style={styles.bar}
            />
            <SHDNAVideoPlayer videoSource="https://euijwuwbczxgtqisbump.supabase.co/storage/v1/object/public/podcast//SHDNA%20Podcast%20Intro%20Video-2.mp4" />
            <Image
              source={require("../../../assets/imgs/Bar_background_horizontal.png")}
              style={styles.bar}
            />
            <SHDNAText style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SHDNAText>
            <SHDNAText
              style={{ fontSize: 24, width: 260, marginVertical: 15 }}
              fontWeight="Bold"
            >
              Chapters
            </SHDNAText>
            <Suspense fallback={<SHDNALoadingBlock />}>
              <SHDNAPodcastList
                episodes={podcastChapters}
                currentEp={selectedEpisode}
                setCurrentEp={handleSetSelectedEpisode}
              />
            </Suspense>
          </View>
        </ScrollView>
        <View style={styles.middleBar} />
        <View style={styles.subview}>
          {selectedEpisode ? (
            <SHDNAPodcastChapter
              isEditing={isEditing}
              episodeData={selectedEpisode}
              refetch={refetch}
            />
          ) : (
            <View style={styles.selectSection}>
              <SHDNAText fontWeight="Bold" style={{ color: Colors.Gray3 }}>
                Select an Episode
              </SHDNAText>
            </View>
          )}
        </View>
      </View>
    </SHDNAView>
  );
}

const styles = StyleSheet.create({
  subview: {
    flex: 1,
    height: Dimensions.get("window").height - 100,
  },
  description: {
    marginTop: 20,
    marginBottom: 5,
  },
  bar: {
    width: "100%",
    height: 10,
    objectFit: "cover",
  },
  middleBar: {
    width: 2,
    height: "100%",
    backgroundColor: Colors.Gray2,
    marginHorizontal: 15,
  },
  selectSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
