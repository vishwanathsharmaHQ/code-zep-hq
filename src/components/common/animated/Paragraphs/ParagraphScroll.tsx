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

const AnimatedParagraphScroll = (props: Props) => {
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
        ease: "circ.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top center",
          end: "top center-=10%",
          toggleActions: "play none none none",
        },
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

export default AnimatedParagraphScroll;

const GridParagraphScroll = (props: Props) => {
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
        ease: "circ.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top center+=15%",
          end: "top center",
          toggleActions: "play none none none",
        },
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

export { GridParagraphScroll };
