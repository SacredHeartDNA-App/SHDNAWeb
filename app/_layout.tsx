import RelayEnvironment from "@/Enviroment";
import { FloatingMenuProvider } from "@/src/Components/FloatingMenu/SHDNAFloatingMenuContext";
import { FloatingViewProvider } from "@/src/Components/FloatingView/SHDNAFloatingViewContext";
import SHDNAFloatingViewManager from "@/src/Components/FloatingView/SHDNAFloatingViewManager";
import SHDNAModal from "@/src/Components/Modal/SHDNAModal";
import { ModalProvider } from "@/src/Components/Modal/SHDNAModalContext";
import SHDNASheetManager from "@/src/Components/Sheet/SHDNASheet";
import { SheetProvider } from "@/src/Components/Sheet/SHDNASheetContext";
import { useFonts } from "expo-font";
import { View } from "react-native";
import SHDNAFloatingMenuManager from "@/src/Components/FloatingMenu/SHDNAFloatingMenuManager";
import SHDNALoading from "@/src/Components/SHDNALoading";
import SHDNACurrenView from "@/src/Views/SHDNACurrenView";
import { UserProvider } from "@/src/Context/SHDNAUserContext";

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
      <UserProvider>
        <FloatingViewProvider>
          <ModalProvider>
            <FloatingMenuProvider>
              <SheetProvider>
                <SHDNAFloatingViewManager />
                <SHDNAModal />
                <SHDNASheetManager />
                <SHDNAFloatingMenuManager />
                <SHDNACurrenView />
              </SheetProvider>
            </FloatingMenuProvider>
          </ModalProvider>
        </FloatingViewProvider>
      </UserProvider>
    </RelayEnvironment>
  );
}

const LoadingView = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SHDNALoading />
    </View>
  );
};
