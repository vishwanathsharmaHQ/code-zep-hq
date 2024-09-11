"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import { useMainContext } from "@/context/MainContext";

export function HeroSpline() {
  const { setSplineLoaded } = useMainContext();

  return (
    <main className="w-full h-full">
      <Spline
        onLoad={() => {
          setSplineLoaded(true);
        }}
        scene="https://prod.spline.design/vZ0WO0AlKzJGiRsU/scene.splinecode"
      />
    </main>
  );
}

type Props = {};

const ExperimentOne = (props: Props) => {
  return (
    <div className="absolute left-0 -z-10 top-0 w-full h-full ">
      <HeroSpline />
    </div>
  );
};

export default ExperimentOne;
