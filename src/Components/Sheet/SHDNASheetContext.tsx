import React, { createContext, ReactNode, useContext, useState } from "react";

type SheetView = {
  title?: string;
  content: ReactNode;
};

interface SheetContext {
  openSheet: (view: SheetView, heightWrappContent?: boolean) => void;
  closeSheet: () => void;
  triggerCloseSheet: () => void;
  switchCloseSheet: boolean;
  sheetDisplayed: boolean;
  heightWrappContent: boolean;
  view: SheetView;
}

const SheetContext = createContext<SheetContext>({
  openSheet: (view: SheetView, heightWrappContent?: boolean) => {},
  closeSheet: () => {},
  triggerCloseSheet: () => {},
  sheetDisplayed: false,
  switchCloseSheet: false,
  heightWrappContent: true,
  view: { content: <></> },
});

export const useSheet = () => {
  return useContext(SheetContext);
};

export const SheetProvider = ({ children }: any) => {
  const [sheetDisplayed, setSheetDisplayed] = useState<boolean>(false);
  const [heightWrappContent, setHeightWrappContent] = useState<boolean>(false);
  const [switchCloseSheet, setSwitchCloseSheet] = useState<boolean>(false);

  const [view, setView] = useState<SheetView>({ content: <></> });

  const openSheet = (view: SheetView, heightWrappContent?: boolean) => {
    setSheetDisplayed(true);
    setView(view);
    heightWrappContent && setHeightWrappContent(heightWrappContent);
  };

  const closeSheet = () => {
    setSheetDisplayed(false);
    setView({ content: <></> });
    setHeightWrappContent(false);
  };

  const triggerCloseSheet = () => {
    setSwitchCloseSheet(!switchCloseSheet);
  };

  return (
    <SheetContext.Provider
      value={{
        openSheet,
        closeSheet,
        switchCloseSheet,
        triggerCloseSheet,
        sheetDisplayed,
        heightWrappContent,
        view,
      }}
    >
      {children}
    </SheetContext.Provider>
  );
};
