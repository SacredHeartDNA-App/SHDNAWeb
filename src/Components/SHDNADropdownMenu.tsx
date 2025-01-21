import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useTransition } from "react";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAText from "./SHDNAText";
import DirectionalSVG from "../../assets/RNSvgs/DirectionalSVG";
import SHDNABlock from "./SHDNABlock";
import SHDNALoading from "./SHDNALoading";

interface DropdownItem {
  label: number | string;
  value: any;
}

type SHDNADropdownMenuProps = {
  value: any;
  placeholder?: string;
  options: DropdownItem[];
  onChange: (value: any) => void;
  maxHeight?: number;
  onClick?: () => {};
  alignment?: "flex-start" | "flex-end";
};

export default function SHDNADropdownMenu({
  value,
  options,
  placeholder,
  onChange,
  maxHeight,
  onClick,
  alignment = "flex-start",
}: SHDNADropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, startTransition] = useTransition();

  return (
    <View>
      <View
        style={styles.button}
        onPointerDown={() => {
          setIsOpen(!isOpen);
          startTransition(() => {
            onClick && onClick();
          });
        }}
      >
        <SHDNAText
          style={{ color: value ? Colors.Gray3 : Colors.Gray2 }}
          fontWeight="SemiBold"
        >
          {options.find((item) => item.value === value)?.label || placeholder}
        </SHDNAText>
        <DirectionalSVG
          iconcolor={Colors.Gray3}
          width={10}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      </View>
      {isLoading ? (
        <View style={styles.menu}>
          <SHDNALoading />
        </View>
      ) : (
        isOpen && (
          <SHDNABlock
            playAnimation={false}
            style={{
              ...(alignment === "flex-end" ? { right: 0 } : { left: 0 }),
              ...styles.menu,
            }}
          >
            <ScrollView
              style={[{ maxHeight }]}
              showsVerticalScrollIndicator={false}
            >
              {options.map((item) => {
                return (
                  <DropdownItem
                    item={item}
                    isSelected={value === item.value}
                    onClick={(value: any) => {
                      onChange(value);
                      setIsOpen(false);
                    }}
                    key={"dropdownItem" + item.label}
                  />
                );
              })}
            </ScrollView>
          </SHDNABlock>
        )
      )}
    </View>
  );
}

type DropdownItemsProps = {
  item: DropdownItem;
  isSelected: boolean;
  onClick: (value: any) => void;
};
const DropdownItem = ({ item, isSelected, onClick }: DropdownItemsProps) => {
  return (
    <View
      style={styles.item}
      onPointerDown={() => {
        onClick(item.value);
      }}
    >
      <SHDNAText fontWeight={isSelected ? "Bold" : "Regular"}>
        {item.label}
      </SHDNAText>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Gray2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  menu: {
    width: "auto",
    position: "absolute",
    top: 40,
    zIndex: 50,
    overflow: "visible",
  },
  item: {
    padding: 10,
  },
});
