import { View, TextInput, StyleSheet, KeyboardTypeOptions } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../assets/SHDNAColors";
import EyeOpenSVG from "../../assets/RNSvgs/EyeOpenSVG";
import EyeClosedSVG from "../../assets/RNSvgs/EyeClosedSVG";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";

type SHDNATextInputProps = {
  placeholder?: string;
  onChange: (input: string) => void;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
};

export default function SHDNATextInput({
  placeholder,
  onChange,
  value,
  keyboardType = "default",
  secureTextEntry = false,
  autoCapitalize = "sentences",
}: SHDNATextInputProps) {
  const handleTouchEnd = (e: any) => {
    e.stopPropagation();
  };

  const [isHidden, setIsHidden] = useState(secureTextEntry);

  return (
    <>
      <TextInput
        style={[styles.wrapper, { fontFamily: "LibreFamily-Regular" }]}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.Gray2}
        keyboardType={keyboardType}
        secureTextEntry={isHidden}
        onPointerDown={handleTouchEnd}
        autoCapitalize={autoCapitalize}
      />
      {secureTextEntry && (
        <View style={styles.hideButton}>
          <SHDNAButton
            onClick={() => setIsHidden(!isHidden)}
            Icon={
              isHidden
                ? () => <EyeOpenSVG iconcolor={Colors.Gray3} width={20} />
                : () => <EyeClosedSVG iconcolor={Colors.Gray3} width={20} />
            }
            state={ButtonStates.TRANSPARENT}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 40,
    backgroundColor: Colors.Background,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Gray2,
    fontFamily: "LibreFamily-Regular",
  },
  hideButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});
