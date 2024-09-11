"use client";

import { useMainContext } from "@/context/MainContext";
import { loadingSlideIn, slideOut } from "@/utils/animations/transitions";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = {};

const PageTransition = (props: Props) => {
  const pathname = usePathname();
  //   const { isAnimating, setIsAnimating } = useContext(MainContext);
  const { isAnimating, setIsAnimating, splineLoaded } = useMainContext();

  const slideAnimationOptions = {
    isAnimating: isAnimating,
    setIsAnimating: setIsAnimating,
  };

  useEffect(() => {
    if (!splineLoaded) return;

    switch (pathname) {
      case "/":
        loadingSlideIn(slideAnimationOptions);
        slideOut(slideAnimationOptions);
        break;
      case "/work":
        slideOut(slideAnimationOptions);
        break;
      default:
        slideOut(slideAnimationOptions);
        break;
    }
  }, [pathname, splineLoaded]);

  return (
    <div className="fixed top-0 z-50 pointer-events-none h-screen w-full">
      <svg
        className="page-transition-overlay"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          className="page-transition-overlay__path"
          vectorEffect="non-scaling-stroke"
          //   d="M 0 100 V 100 Q 50 100 100 100 V 100 z"

          d="M 0 0 V 100 Q 50 100 100 100 V 0 z"
        />
      </svg>
    </div>
  );
};

export default PageTransition;
