"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { ReactNode, useRef } from "react";
import SplitType from "split-type";

type Props = {
  children: ReactNode | string;
  className?: string;
  delay?: number;
};

const AnimatedParagraph = (props: Props) => {
  const paragraphRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    if (!paragraphRef.current) return;

    // Ensure Splitting.js runs to split the text into words
    const text = new SplitType(paragraphRef.current);

    // Target the split text elements
    const words = paragraphRef.current.querySelectorAll(".char");

    // GSAP animation for split text
    gsap.fromTo(
      words,
      { y: "100%", autoAlpha: 0 },
      {
        y: "0%",
        autoAlpha: 1,
        stagger: 0.0025,
        duration: 1.25,
        delay: props.delay || 0,
        ease: "circ.out",
      }
    );

    return () => {};
  }, [pathname, paragraphRef]);

  return (
    <div ref={paragraphRef} className={`${props.className}`}>
      {props.children}
    </div>
  );
};

export default AnimatedParagraph;
