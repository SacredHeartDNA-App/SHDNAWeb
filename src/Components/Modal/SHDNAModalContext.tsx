import React, { createContext, ReactNode, useContext, useState } from "react";

interface ModalContext {
  openModal: (content: ReactNode, showCloseButton?: boolean) => void;
  closeModal: () => void;
  content: ReactNode;
  showCloseButton: boolean;
}

const ModalContext = createContext<ModalContext>({
  openModal: (content: ReactNode, showCloseButton?: boolean) => {},
  closeModal: () => {},
  content: null,
  showCloseButton: false,
});

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: any) => {
  const [content, setContent] = useState<ReactNode>(null);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const openModal = (content: ReactNode, showCloseButton?: boolean) => {
    setContent(content);
    setShowCloseButton(showCloseButton ?? false);
  };

  const closeModal = () => {
    setContent(null);
    setShowCloseButton(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        content,
        showCloseButton,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
