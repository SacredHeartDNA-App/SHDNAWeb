import { Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Colors } from "@/assets/SHDNAColors";
import { useFloatingMenu } from "./SHDNAFloatingMenuContext";

interface FloatingItem {
  label: string;
  onClick: () => void;
}

type SHDNAFloatingMenuProps = {
  options: FloatingItem[];
  onClose: () => {};
};

export default function SHDNAFloatingMenu({
  options,
  onClose,
}: SHDNAFloatingMenuProps) {
  const { setMenuOptions, setPosition, toggleFloatingMenu } = useFloatingMenu();
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current === null) return;

    const rect = ref.current.getBoundingClientRect();
    setMenuOptions(options);
    setPosition({ top: rect.top + 40, left: rect.left });
    toggleFloatingMenu(true);
    return () => toggleFloatingMenu(false);
  }, []);

  return <View ref={ref} />;
}
