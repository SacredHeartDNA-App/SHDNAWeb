import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";
import AddSVG from "@/assets/RNSvgs/AddSVG";
import SHDNATextInput from "./SHDNATextInput";
import MinusSVG from "@/assets/RNSvgs/MinusSVG";

type SHDNATextListProps = {
  items: string[];
  setItems: (list: string[]) => void;
};

export default function SHDNATextList({ items, setItems }: SHDNATextListProps) {
  const handleOnChange = (value: string, index: number) => {
    const itemsCopy = [...items];
    itemsCopy[index] = value;
    setItems([...itemsCopy]);
  };

  const handleOnAdd = () => {
    const itemsCopy = [...items];
    itemsCopy.shift();
    setItems([items[0], "", ...itemsCopy]);
  };

  const handleOnDelete = (index: number) => {
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems([...itemsCopy]);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.item}>
        <View style={{ width: 40 }}>
          <SHDNAButton
            onClick={() => handleOnAdd()}
            Icon={AddSVG}
            state={ButtonStates.ACTIVE}
          />
        </View>
        <SHDNATextInput
          value={items[0]}
          onChange={(value) => {
            handleOnChange(value, 0);
          }}
        />
      </View>
      {items.map((item, index) => {
        if (index === 0) return;
        return (
          <View style={styles.item} key={"textList" + index}>
            <View style={{ width: 40, height: 40 }}>
              <SHDNAButton
                onClick={() => handleOnDelete(index)}
                Icon={MinusSVG}
                state={ButtonStates.ALERT}
              />
            </View>
            <SHDNATextInput
              value={item}
              onChange={(value) => {
                handleOnChange(value, index);
              }}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    gap: 15,
  },
  wrapper: {
    gap: 15,
  },
});
