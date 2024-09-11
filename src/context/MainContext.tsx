"use client";

import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
type Props = {
  children: React.ReactNode;
};
type Context = {
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
  isNav: boolean;
  setIsNav: Dispatch<SetStateAction<boolean>>;
  isNavAnimating: boolean;
  setIsNavAnimating: Dispatch<SetStateAction<boolean>>;
  splineLoaded: boolean;
  setSplineLoaded: Dispatch<SetStateAction<boolean>>;
};

// Just find-replace "XContext" with whatever context name you like. (ie. DankContext)
const MainContext = createContext<Context | null>(null);

export const MainContextProvider = ({ children }: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const [isNavAnimating, setIsNavAnimating] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  return (
    <MainContext.Provider
      value={{
        isAnimating,
        setIsAnimating,
        isNav,
        setIsNav,
        isNavAnimating,
        setIsNavAnimating,
        splineLoaded,
        setSplineLoaded,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);

  if (!context)
    throw new Error("XContext must be called from within the XContextProvider");

  return context;
};
