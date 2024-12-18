import React, { createContext, ReactNode, useContext, useState } from "react";

interface FloatingViewContext {
  openFloatingView: (content: ReactNode, isOverSubview?: boolean) => void;
  closeFloatingView: () => void;
  content: ReactNode;
  isOverSubview: boolean;
}

const FloatingViewContext = createContext<FloatingViewContext>({
  openFloatingView: (content: ReactNode, isOverSubview?: boolean) => {},
  closeFloatingView: () => {},
  content: null,
  isOverSubview: false,
});

export const useFloatingView = () => {
  return useContext(FloatingViewContext);
};

export const FloatingViewProvider = ({ children }: any) => {
  const [content, setContent] = useState<ReactNode>(null);
  const [isOverSubview, setIsOverSubview] = useState(false);

  const openFloatingView = (content: ReactNode, isOverSubview?: boolean) => {
    setContent(content);
    setIsOverSubview(isOverSubview ?? false);
  };

  const closeFloatingView = () => {
    setContent(null);
    setIsOverSubview(false);
  };

  return (
    <FloatingViewContext.Provider
      value={{
        openFloatingView,
        closeFloatingView,
        content,
        isOverSubview,
      }}
    >
      {children}
    </FloatingViewContext.Provider>
  );
};
