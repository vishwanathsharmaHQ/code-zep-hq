"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { ReactNode, useRef } from "react";
import SplitType from "split-type";

type Props = {
  children: ReactNode | string;
  className?: string;
};

const AnimatedSubheading = (props: Props) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    if (!headingRef.current) return;

    // Ensure Splitting.js runs to split the text into words
    const text = new SplitType(headingRef.current);

    // Target the split text elements
    const words = headingRef.current.querySelectorAll(".char");

    // GSAP animation for split text
    gsap.fromTo(
      words,
      { y: "100%" },
      {
        y: "0%",
        stagger: 0.02,
        duration: 0.5,
        ease: "circ.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top center",
          end: "top center-=10%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {};
  }, [pathname, headingRef]);

  return (
    <div ref={headingRef} className={`${props.className}`}>
      {props.children}
    </div>
  );
};

export default AnimatedSubheading;
