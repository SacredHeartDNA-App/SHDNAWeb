import { Colors } from "@/assets/SHDNAColors";
import SHDNAWebSignIn from "@/src/Views/SHDNAWebSignIn";
import { View } from "react-native";
import { useFonts } from "expo-font";
import SHDNAText from "@/src/Components/SHDNAText";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: Colors.Background,
      }}
    >
      <SHDNAText>Hello</SHDNAText>
    </View>
  );
}
