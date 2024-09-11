"use client";

import { MainHeading } from "@/components/common/animated/MainHeadings/MainHeadings";
import PageTransitionLink from "@/components/common/links/PageTransitionLink";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";
import { aboutPageCopy } from "@/utils/temp-data/copy";

type Props = {};

const AboutLanding = (props: Props) => {
  const { heading, subheading } = aboutPageCopy; // Use the dynamic data
  const landingDescriptionRef = useRef<HTMLParagraphElement>(null);
  const circularLinkRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    if (!circularLinkRef.current) return;

    const entryTL = gsap.timeline({});

    entryTL
      .fromTo(
        [landingDescriptionRef.current, circularLinkRef.current],
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.2,
          delay: 0.25,
        }
      )
      .fromTo(
        [circularLinkRef.current.children[0].children[1].children],
        {
          color: "#000",
          y: "100%",
        },
        {
          color: "#fff",
          y: "0%",
          stagger: 0.5,
        }
      )
      .fromTo(".circle-button-landing-moon", { opacity: 0 }, { opacity: 1 })
      .fromTo(
        ".circle-button-landing-moon",
        {
          rotate: -90,
        },
        {
          rotate: 0,
        },
        "<"
      );

    const hoverTL = gsap.timeline({
      paused: true,
    });

    hoverTL.to(".circle-button-landing-moon", {
      rotate: 90,
      duration: 0.25,
    });

    circularLinkRef.current.addEventListener("mouseover", () => {
      hoverTL.play();
    });

    circularLinkRef.current.addEventListener("mouseout", () => {
      hoverTL.reverse();
    });
  }, [pathname]);

  return (
    <div className="pt-24 lg:pt-48 w-full h-screen text-balance">
      <div className="common-pageheading font-black font-fancy leading-tight lg:block hidden">
        <MainHeading>
          <div className="overflow-hidden leading-tight">{heading}</div>
        </MainHeading>
      </div>
      <p ref={landingDescriptionRef} className="my-10 text-center mx-auto cz-p">
        {subheading}
      </p>

      <div
        ref={circularLinkRef}
        className="absolute bottom-10 h-24 w-24 inset-x-1/2 -translate-x-1/2 mx-auto lg:h-32 lg:w-32  cursor-pointer  "
      >
        <div className="circle-button-landing h-full w-full flex justify-center items-center">
          <div className="circle-button-landing-moon"></div>
          <div className="relative w-full h-[3em] basic-color-transition">
            <PageTransitionLink
              href="/work"
              className="font-fancy absolute left-1/2 -translate-x-1/2 w-[200%] h-full text-xl lg:text-3xl flex items-center justify-center bg-black py-4"
            >
              explore
            </PageTransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
