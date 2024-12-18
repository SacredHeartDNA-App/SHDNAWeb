import React, { createContext, ReactNode, useContext, useState } from "react";

interface SubViewContext {
  openSubview: (
    title: string | ReactNode,
    content: ReactNode,
    secondaryButtons?: ReactNode
  ) => void;
  popSubviewStack: () => void;
  isScrollBlocked: boolean;
  setIsScrollBlocked: (value: boolean) => void;
  subviewsStack: SubView[];
}

const SubviewContext = createContext<SubViewContext>({
  openSubview: (
    title: string | ReactNode,
    content: ReactNode,
    secondaryButtons?: ReactNode
  ) => {},
  popSubviewStack: () => {},
  isScrollBlocked: false,
  setIsScrollBlocked: (value: boolean) => {},
  subviewsStack: [],
});

export const useSubview = () => {
  return useContext(SubviewContext);
};

export interface SubView {
  title: string | ReactNode;
  content: ReactNode;
  secondaryButtons?: ReactNode;
}

export const SubViewProvider = ({ children }: any) => {
  const [subviewsStack, setSubviewsStack] = useState<SubView[]>([]);
  const [isScrollBlocked, setIsScrollBlocked] = useState<boolean>(false);

  const openSubview = (
    title: string | ReactNode,
    content: ReactNode,
    secondaryButtons?: ReactNode
  ) => {
    const newSubview: SubView = { title, content, secondaryButtons };

    const newArray: SubView[] = [...subviewsStack, newSubview];
    setSubviewsStack([...newArray]);
  };

  const popSubviewStack = () => {
    const newArray: SubView[] = subviewsStack;
    newArray.pop();

    setSubviewsStack([...newArray]);
  };

  return (
    <SubviewContext.Provider
      value={{
        openSubview,
        popSubviewStack,
        subviewsStack,
        setIsScrollBlocked,
        isScrollBlocked,
      }}
    >
      {children}
    </SubviewContext.Provider>
  );
};
