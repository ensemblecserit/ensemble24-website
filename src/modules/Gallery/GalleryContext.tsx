"use client";

import { ChildrenProps } from "@/types/common.types";
import { createContext, useContext, useState } from "react";

type GalleryContextProps = {
  clicked: string | null;
  changeState: (n: string) => void;
};
const defaultGalleryProps = {
  clicked: null,
  changeState: () => {},
};

const GalleryContext = createContext<GalleryContextProps>(defaultGalleryProps);

export const GalleryProvider = (props: ChildrenProps) => {
  const [clicked, setClicked] = useState<string | null>(null);
  const changeState = (n: string) => {
    setClicked(n);
  };
  return (
    <GalleryContext.Provider
      value={{ clicked, changeState } as GalleryContextProps}
    >
      {props.children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);
