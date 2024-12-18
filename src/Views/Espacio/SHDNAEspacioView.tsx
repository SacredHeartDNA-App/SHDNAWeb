import { StyleSheet, View } from "react-native";
import React, { Suspense, useState } from "react";
import SHDNAView from "../../Components/SHDNAView";
import SHDNASwitch from "../../Components/SHDNASwitch";
import EspacioSVG from "../../../assets/RNSvgs/EspacioSVG";
import SHDNAMeditationsView from "./SHDNAMeditationsView";
import SHDNALoading from "../../Components/SHDNALoading";
import SHDNAPassport from "./SHDNAPassportView";

export default function SHDNAEspacioView() {
  const [subviewOptionValue, setSubviewOptionValue] = useState(0);

  const options = [EspacioSVG, EspacioSVG];

  const SwitchViews = () => {
    switch (subviewOptionValue) {
      case 0:
        return <SHDNAMeditationsView />;
      case 1:
        return <></>;

      default:
        return <SHDNAMeditationsView />;
    }
  };

  return (
    <SHDNAView
      title="Espacio"
      secondaryButtons={
        <SHDNASwitch
          onChange={(value: number) => setSubviewOptionValue(value)}
          value={subviewOptionValue}
          options={options}
        />
      }
    >
      <Suspense
        fallback={
          <View
            style={{
              height: 600,
              alignItems: "center",
            }}
          >
            <SHDNALoading />
          </View>
        }
      >
        <SwitchViews />
      </Suspense>
    </SHDNAView>
  );
}

const styles = StyleSheet.create({});
