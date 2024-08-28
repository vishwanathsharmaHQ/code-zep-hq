"use client";

import { ReactNode } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";

type Props = {
  children: ReactNode;
};

function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
