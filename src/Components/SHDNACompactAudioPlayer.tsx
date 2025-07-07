import { View, StyleSheet, Pressable, NativePointerEvent } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Audio,
  AVPlaybackSource,
  AVPlaybackStatusSuccess,
  InterruptionModeAndroid,
  InterruptionModeIOS,
} from "expo-av";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";
import SHDNAText from "./SHDNAText";
import PlaySVG from "../../assets/RNSvgs/PlaySVG";
import PauseSVG from "../../assets/RNSvgs/PauseSVG";
import FowardTenSecSVG from "../../assets/RNSvgs/FowardTenSecSVG";
import BackwardsTenSecSVG from "../../assets/RNSvgs/BackwardsTenSecSVG";
import { Colors } from "../../assets/SHDNAColors";

type SHDNACompactAudioPlayerProps = {
  source: AVPlaybackSource;
  disablePlayer?: boolean;
  pauseTrigger?: any;
};

export default function SHDNACompactAudioPlayer({
  source,
  disablePlayer = false,
  pauseTrigger,
}: SHDNACompactAudioPlayerProps) {
  const [sound, setSound] = useState<Audio.Sound>(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);
  const [pressingDot, setPressingDot] = useState(false);
  const [status, setStatus] = useState<AVPlaybackStatusSuccess>();
  const [progress, setProgress] = useState(0);

  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const viewRef = useRef<View>(null);

  const handlePressCircle = (event: NativePointerEvent) => {
    const { pageX } = event;

    if (viewRef.current == null) return;

    viewRef.current.measureInWindow((x) => {
      let diff = pageX - x;
      diff = diff < 0 ? 0 : diff;
      diff = diff > progressBarWidth ? progressBarWidth : diff;
      const percentaje = (diff / progressBarWidth) * 100;
      setProgress(percentaje);
      sound.setPositionAsync(
        (status?.durationMillis ?? 0) * (percentaje / 100)
      );
    });
  };

  async function playSound() {
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function pauseSound() {
    await sound.pauseAsync();
    setIsPlaying(false);
  }

  async function setAudioPosition(seconds: number) {
    if (!status) return;
    const newPosition = status.positionMillis + seconds * 1000;
    await sound.setPositionAsync(newPosition);
  }

  useEffect(() => {
    (async () => {
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        interruptionModeIOS: InterruptionModeIOS.DuckOthers,
        interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: true,
      });

      const { sound } = await Audio.Sound.createAsync(source);
      setSound(sound);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          const progress =
            (status?.positionMillis ?? 0) / (status?.durationMillis || 1);
          setProgress && setProgress(progress * 100);
          setStatus(status);
        }
      });

      return sound
        ? async () => {
            await sound.pauseAsync();
            setIsPlaying(false);
            await sound.unloadAsync();
          }
        : undefined;
    })();
  }, [source]);

  useEffect(() => {
    if (!sound) return;
    (async () => {
      try {
        await sound.pauseAsync();
        setIsPlaying(false);
      } catch (err) {
        console.warn("Error pausing sound:", err);
      }
    })();
  }, [pauseTrigger]);

  const formatTime = (millis: number) => {
    const minutes = Math.floor(millis / 1000 / 60);
    const seconds = Math.floor((millis / 1000) % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const isDisabled = disablePlayer || status === undefined;

  return (
    <View>
      <View
        style={styles.backgroundProgressBar}
        ref={viewRef}
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          setProgressBarWidth(layout.width);
        }}
      >
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
        {!isDisabled && (
          <Pressable
            onPointerDown={async () => {
              await pauseSound();
              setPressingDot(true);
            }}
            onPointerMove={(e) => {
              if (!pressingDot) return;
              handlePressCircle(e.nativeEvent);
            }}
            onPointerLeave={async () => {
              await playSound();
              setPressingDot(false);
            }}
            style={[styles.circleWrapper, { left: `${progress}%` }]}
          >
            <View style={styles.circle} />
          </Pressable>
        )}
      </View>
      <View style={styles.wrapper}>
        <View>
          <SHDNAButton
            onClick={async () => await setAudioPosition(-10)}
            Icon={BackwardsTenSecSVG}
            state={ButtonStates.TRANSPARENT}
            iconSize={24}
            isDisabled={isDisabled}
          />
        </View>
        <View>
          <SHDNAButton
            onClick={async () => await (isPlaying ? pauseSound() : playSound())}
            Icon={isPlaying ? PauseSVG : PlaySVG}
            state={ButtonStates.TRANSPARENT}
            iconSize={18}
            isDisabled={isDisabled}
          />
        </View>
        <View>
          <Pressable
            onPress={async () => {
              setIsPlaying(false);
              setProgress && setProgress(0);
              await sound.stopAsync();
            }}
            style={[
              styles.replayButton,
              isDisabled && { backgroundColor: Colors.Gray3 },
            ]}
            disabled={isDisabled}
          />
        </View>
        <View>
          <SHDNAButton
            onClick={async () => await setAudioPosition(10)}
            Icon={FowardTenSecSVG}
            state={ButtonStates.TRANSPARENT}
            iconSize={24}
            isDisabled={isDisabled}
          />
        </View>
        <View style={styles.timeTextWrapper}>
          <SHDNAText fontWeight="Bold" style={styles.timeText}>
            {isDisabled ? "00" : formatTime(status?.positionMillis || 0)}
          </SHDNAText>
          <SHDNAText fontWeight="Bold" style={styles.timeText}>
            :
          </SHDNAText>
          <SHDNAText fontWeight="Bold" style={styles.timeText}>
            {isDisabled ? "00" : formatTime(status?.durationMillis || 0)}
          </SHDNAText>
        </View>
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
    justifyContent: "space-between",
  },
  timeTextWrapper: {
    flexDirection: "row",
    width: 100,
    gap: 2,
    justifyContent: "space-between",
  },
  replayButton: {
    aspectRatio: 1 / 1,
    height: 17,
    width: 17,
    backgroundColor: "black",
    borderRadius: 2,
  },
  timeText: {
    fontSize: 14,
    color: Colors.Gray3,
  },
  backgroundProgressBar: {
    backgroundColor: Colors.LightRed1,
    width: "100%",
    height: 3,
    position: "relative",
    marginVertical: 5,
  },
  progressBar: {
    position: "absolute",
    backgroundColor: Colors.Red2,
    height: 3,
    left: 0,
  },
  circleWrapper: {
    position: "absolute",
    width: 20,
    height: 20,
    top: -4,
    zIndex: 100,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: Colors.Red2,
    borderRadius: 7,
    zIndex: 100,
  },
});
