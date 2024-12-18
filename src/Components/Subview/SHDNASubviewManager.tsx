import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useSubview } from "./SHDNASubviewContext";
import SHDNASubview from "./SHDNASubview";

export default function SHDNASubviewManager() {
  const { subviewsStack } = useSubview();

  return (
    <>
      {subviewsStack.map((subview, index) => {
        if (index > 2) return;
        return (
          <SHDNASubview
            content={subview.content}
            title={subview.title ?? ""}
            secondaryButtons={subview.secondaryButtons}
            key={"subview" + index}
          />
        );
      })}
    </>
  );
}
