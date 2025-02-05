import { Colors } from "@/assets/SHDNAColors";
import React from "react";
import { StyleSheet, View } from "react-native";

type SHDNADatePickerProps = {
  value: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
};

export default function SHDNADatePicker({
  value,
  onChange,
  isDisabled = false,
}: SHDNADatePickerProps) {
  return (
    <View
      style={[
        styles.wrapper,
        { backgroundColor: isDisabled ? Colors.Gray1 : "white" },
      ]}
    >
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.datePicker}
        disabled={isDisabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  datePicker: {
    borderRadius: 10,
    padding: 11,
    zIndex: 10,
    borderWidth: 0,
    outline: "none",
  },
  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    zIndex: 10,
    borderColor: Colors.Gray2,
  },
});
