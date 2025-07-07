import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useVideoPlayer, VideoView } from "expo-video";

type SHDNAVideoPlayer = {
  videoSource: string;
  onVideoFinished?: () => void;
};

export default function SHDNAVideoPlayer({
  videoSource,
  onVideoFinished,
}: SHDNAVideoPlayer) {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = false;
  });

  useEffect(() => {
    const subscription = player.addListener("playToEnd", () => {
      onVideoFinished && onVideoFinished();
    });

    return () => {
      subscription.remove();
    };
  });

  return (
    <View>
      <View style={[styles.videoWindow, styles.loadingState]} />
      <VideoView player={player} style={styles.videoWindow} />
    </View>
  );
}

const styles = StyleSheet.create({
  videoWindow: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  wrapper: { width: "100%" },
  loadingState: {
    position: "absolute",
    backgroundColor: "gray",
  },
});
