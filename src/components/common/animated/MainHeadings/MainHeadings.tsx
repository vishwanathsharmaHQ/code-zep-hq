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

export const MainHeading = (props: Props) => {
  const headingRef = useRef<HTMLDivElement>(null); // Type annotation added here
  const pathname = usePathname();

  useGSAP(() => {
    if (!headingRef.current) return;

    // Ensure Splitting.js runs to split the text into words

    const text = new SplitType(headingRef.current);

    const words = headingRef.current.querySelectorAll(".char");

    // GSAP animation for split text
    gsap.fromTo(
      words,
      { y: "100%" },
      { y: "0%", stagger: 0.04, duration: 1, ease: "circ.out" }
    );

    return () => {
      // Cleanup Splitting elements if necessary
      //   words.forEach((word) => word.remove());
    };
  }, [pathname]);

  return (
    <div ref={headingRef} className="leading-[1.1] ">
      {props.children}
    </div>
  );
};

export const ProjectGridHeading = (props: Props) => {
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
          start: "top bottom-=10%",
          end: "top center",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      // Cleanup Splitting elements if necessary
      words.forEach((word) => word.remove());
    };
  }, [pathname, headingRef]);

  return (
    <div ref={headingRef} className={`${props.className} leading-[1.1]`}>
      {props.children}
    </div>
  );
};
