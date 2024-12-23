import { Colors } from "@/assets/SHDNAColors";
import RelayEnvironment from "@/Enviroment";
import { FloatingMenuProvider } from "@/src/Components/FloatingMenu/SHDNAFloatingMenuContext";
import { FloatingViewProvider } from "@/src/Components/FloatingView/SHDNAFloatingViewContext";
import SHDNAFloatingViewManager from "@/src/Components/FloatingView/SHDNAFloatingViewManager";
import SHDNAModal from "@/src/Components/Modal/SHDNAModal";
import { ModalProvider } from "@/src/Components/Modal/SHDNAModalContext";
import SHDNASideBar from "@/src/Components/SHDNASideBar";
import SHDNASheetManager from "@/src/Components/Sheet/SHDNASheet";
import { SheetProvider } from "@/src/Components/Sheet/SHDNASheetContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { View } from "react-native";
import SHDNAFloatingMenuManager from "@/src/Components/FloatingMenu/SHDNAFloatingMenuManager";

export default function RootLayout() {
  const [] = useFonts({
    "LibreFamily-Regular": require("../assets/fonts/Libre_Franklin/static/LibreFranklin-Regular.ttf"),
    "LibreFamily-Thin": require("../assets/fonts/Libre_Franklin/static/LibreFranklin-Thin.ttf"),
    "LibreFamily-Light": require("../assets/fonts/Libre_Franklin/static/LibreFranklin-Light.ttf"),
    "LibreFamily-Medium": require("../assets/fonts/Libre_Franklin/static/LibreFranklin-Medium.ttf"),
    "LibreFamily-SemiBold": require("../assets/fonts/Libre_Franklin/static/LibreFranklin-SemiBold.ttf"),
    "LibreFamily-Bold": require("../assets/fonts/Libre_Franklin/static/LibreFranklin-Bold.ttf"),
    "LibreFamily-ExtraBold": require("../assets/fonts/Libre_Franklin/static/LibreFranklin-ExtraBold.ttf"),
    "LibreFamily-Black": require("../assets/fonts/Libre_Franklin/static/LibreFranklin-Black.ttf"),
  });

  return (
    <RelayEnvironment>
      <FloatingViewProvider>
        <ModalProvider>
          <FloatingMenuProvider>
            <SheetProvider>
              <SHDNAFloatingViewManager />
              <SHDNAModal />
              <SHDNASheetManager />
              <SHDNAFloatingMenuManager />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  backgroundColor: Colors.Background,
                }}
              >
                <SHDNASideBar />
                <Stack screenOptions={{ headerShown: false }} />
              </View>
            </SheetProvider>
          </FloatingMenuProvider>
        </ModalProvider>
      </FloatingViewProvider>
    </RelayEnvironment>
  );
}
