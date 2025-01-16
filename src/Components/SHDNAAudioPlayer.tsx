import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Audio, AVPlaybackSource, AVPlaybackStatusSuccess } from "expo-av";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";
import SHDNAText from "./SHDNAText";

type SHDNAAudioPlayerProps = {
  source: AVPlaybackSource;
};

export default function SHDNAAudioPlayer({ source }: SHDNAAudioPlayerProps) {
  const [sound, setSound] = useState<Audio.Sound>(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState<AVPlaybackStatusSuccess>();

  async function playSound() {
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function stopSound() {
    if (!sound) return;
    await sound.pauseAsync();
    setIsPlaying(false);
  }

  useEffect(() => {
    (async () => {
      const { sound } = await Audio.Sound.createAsync(source);
      setSound(sound);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setStatus(status);
        }
      });

      return sound
        ? () => {
            sound.unloadAsync();
          }
        : undefined;
    })();
  }, []);

  const formatTime = (millis: number) => {
    const minutes = Math.floor(millis / 1000 / 60);
    const seconds = Math.floor((millis / 1000) % 60);
    return `${Number.isNaN(minutes) ? "0" : minutes}:${
      seconds < 10 ? "0" : ""
    }${Number.isNaN(minutes) ? "00" : minutes}`;
  };

  return (
    <View style={styles.wrapper}>
      <SHDNAText fontWeight="Bold" style={{ fontSize: 16, width: 100 }}>
        {formatTime(status?.positionMillis ?? 0)} :{" "}
        {formatTime(status?.durationMillis ?? 0)}
      </SHDNAText>
      <View style={{ flex: 2 }}>
        <SHDNAButton
          onClick={() => (isPlaying ? stopSound() : playSound())}
          text={isPlaying ? "Stop" : "Play"}
          state={isPlaying ? ButtonStates.DEFAULT : ButtonStates.ACTIVE}
        />
      </View>
      <View style={{ flex: 1 }}>
        <SHDNAButton
          onClick={async () => {
            await sound.stopAsync();
            await sound.playAsync();
          }}
          text={"Replay"}
          state={ButtonStates.SECONDARY}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    gap: 10,
    alignItems: "center",
  },
});
