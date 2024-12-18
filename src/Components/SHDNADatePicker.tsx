import { StyleSheet, View } from "react-native";
import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Colors } from "../../assets/SHDNAColors";

type SHDNADatePickerProps = {
  value: Date;
  onChange: (value: Date | undefined) => void;
};

export default function SHDNADatePicker({
  value,
  onChange,
}: SHDNADatePickerProps) {
  return (
    <View style={styles.wrapper}>
      <RNDateTimePicker value={value} onChange={(e, date) => onChange(date)} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Gray2,
  },
});
