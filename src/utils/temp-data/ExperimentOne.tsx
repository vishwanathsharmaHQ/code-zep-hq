import React from "react";

import Spline from "@splinetool/react-spline/next";

export function HeroSpline() {
  return (
    <main className="w-full h-full">
      <Spline scene="https://prod.spline.design/Ukz3igpoWjDeHPUT/scene.splinecode" />
    </main>
  );
}

type Props = {};

const ExperimentOne = (props: Props) => {
  return (
    <div className="fixed left-0 -z-10 top-0 w-full h-full">
      <HeroSpline />
    </div>
  );
};

export default ExperimentOne;
