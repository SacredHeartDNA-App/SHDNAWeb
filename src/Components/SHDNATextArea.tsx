import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors } from "../../assets/SHDNAColors";

type SHDNATextAreaProps = {
  placeholder?: string;
  onChange: (input: string) => void;
  value: string;
  fixedHeight?: number;
  height?: number;
  isDisabled?: boolean;
};

export default function SHDNATextArea({
  placeholder,
  onChange,
  value,
  fixedHeight,
  height = 100,
  isDisabled = false,
}: SHDNATextAreaProps) {
  return (
    <TextInput
      multiline={true}
      style={[
        styles.wrapper,
        { height: fixedHeight || height },
        isDisabled && { backgroundColor: Colors.Gray1 },
      ]}
      editable={!isDisabled}
      onChangeText={onChange}
      value={value}
      onPointerDown={(e) => {
        e.stopPropagation();
      }}
      keyboardType="default"
      placeholder={placeholder}
      placeholderTextColor={Colors.Gray2}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.Background,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Gray2,
  },
});
