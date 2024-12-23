import React, {
  createContext,
  LegacyRef,
  useContext,
  useRef,
  useState,
} from "react";
import { View } from "react-native";

export interface FloatingItem {
  label: string;
  onClick: () => void;
}

export interface Position {
  top: number;
  left: number;
}

interface FloatingMenuContext {
  showMenu: boolean;
  toggleFloatingMenu: (value: boolean) => void;
  menu: FloatingItem[];
  setMenuOptions: (menu: FloatingItem[]) => void;
  position: Position;
  setPosition: (value: Position) => void;
}

const FloatingMenuContext = createContext<FloatingMenuContext>({
  showMenu: false,
  toggleFloatingMenu: (value: boolean) => {},
  menu: [],
  setMenuOptions: (menu: FloatingItem[]) => {},
  position: { top: 40, left: 40 },
  setPosition: (value: Position) => {},
});

export const useFloatingMenu = () => {
  return useContext(FloatingMenuContext);
};

export const FloatingMenuProvider = ({ children }: any) => {
  const [menu, setMenu] = useState<FloatingItem[]>([]);
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });

  const setMenuOptions = (options: FloatingItem[]) => {
    setMenu(options);
  };

  const toggleFloatingMenu = (value: boolean) => {
    setShowMenu(value);
  };

  return (
    <FloatingMenuContext.Provider
      value={{
        toggleFloatingMenu,
        menu,
        setMenuOptions,
        showMenu,
        position,
        setPosition,
      }}
    >
      {children}
    </FloatingMenuContext.Provider>
  );
};
