import {
  Image,
  Animated,
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
  RecursiveArray,
  RegisteredStyle,
  Falsy,
  PanResponder,
  NativeTouchEvent,
} from "react-native";
import React, { useRef, useState } from "react";
import { useSubview } from "./Subview/SHDNASubviewContext";
import SHDNABlockGlimmer from "./SHDNABlockGlimmer";

type SHDNAImageProps = {
  source: ImageSourcePropType;
  isInteractive?: boolean;
  style?:
    | ViewStyle
    | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>>;
  width?: number;
  height?: number;
  flex?: number;
};

export default function SHDNAImage({
  source,
  style,
  width,
  height,
  flex,
  isInteractive = false,
}: SHDNAImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

  const { setIsScrollBlocked } = useSubview();

  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const scale = useRef(new Animated.Value(1)).current;
  const initialDistance = useRef(0);
  const initialPosition = useRef({ x: 0, y: 0 });

  const getDistance = (p1: NativeTouchEvent, p2: NativeTouchEvent) => {
    const dx = p2.pageX - p1.pageX;
    const dy = p2.pageY - p1.pageY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getMiddlePoint = (p1: NativeTouchEvent, p2: NativeTouchEvent) => {
    const mX = (p2.pageX - p1.pageX) / 2 + p1.pageX;
    const mY = (p2.pageY - p1.pageY) / 2 + p1.pageY;

    return { x: mX, y: mY };
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (_, gestureState) =>
        gestureState.numberActiveTouches === 2 && isInteractive,
      onMoveShouldSetPanResponder: (_, gestureState) =>
        gestureState.numberActiveTouches === 2 && isInteractive,
      onPanResponderGrant: (e) => {
        if (e.nativeEvent.touches.length === 2) {
          const [touch1, touch2] = e.nativeEvent.touches;
          initialDistance.current = getDistance(touch1, touch2);
          initialPosition.current = getMiddlePoint(touch1, touch2);
          setIsMoving(true);
          setIsScrollBlocked(true);
        }
      },
      onPanResponderMove: (e) => {
        if (e.nativeEvent.touches.length === 2) {
          const [touch1, touch2] = e.nativeEvent.touches;
          const newDistance = getDistance(touch1, touch2);
          const newPosition = getMiddlePoint(touch1, touch2);

          const scaleFactor = newDistance / initialDistance.current;
          scale.setValue(scaleFactor);

          const positionChange = {
            x: newPosition.x - initialPosition.current.x,
            y: newPosition.y - initialPosition.current.y,
          };
          position.setValue(positionChange);
        }
      },
      onPanResponderRelease: () => {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: false,
        }).start();
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();

        setIsMoving(false);
        setIsScrollBlocked(false);
      },
    })
  );

  return (
    <Animated.View
      {...panResponder.current.panHandlers}
      style={[
        style,
        {
          transform: [
            { scale },
            { translateX: position.x },
            { translateY: position.y },
          ],
          zIndex: isMoving ? 21 : 20,
          flex,
          width,
          height,
        },
      ]}
    >
      {isLoading && <SHDNABlockGlimmer />}
      <Image
        source={source}
        style={[styles.image, { width, height, flex }]}
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
});
