"use client";

import { MainHeading } from "@/components/common/animated/MainHeadings/MainHeadings";
import PageTransitionLink from "@/components/common/links/PageTransitionLink";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AnimatedParagraph from "@/components/common/animated/Paragraphs/Paragraph";
const Landing = () => {
  const landingDescriptionRef = useRef<HTMLParagraphElement>(null);
  const circularLinkRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    if (!circularLinkRef.current) return;

    const entryTL = gsap.timeline({});

    entryTL
      .fromTo(
        [circularLinkRef.current],
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.2,
          delay: 0.75,
        }
      )

      .fromTo(
        [
          // circularLinkRef.current.children[0],
          circularLinkRef.current.children[0].children[1].children,
        ],
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
      .fromTo(".circle-button-landing-moon", { opacity: 0 }, { opacity: 1 }, "<")
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
    <div className="landing-section text-center w-full h-svh items-center flex">
      <div className="w-full flex justify-center items-center flex-col relative h-full">
        <div id="landing-text" className="cz-h1 font-fancy">
          <MainHeading>
            <div className="overflow-hidden w-full relative">Metamorph</div>
            <div className="overflow-hidden w-full relative">your business</div>
            <div className="overflow-hidden w-full relative">with the web</div>
          </MainHeading>
        </div>
        <AnimatedParagraph delay={1.25}>
          <p className="cz-p">
            {`  I'm here to revolutionize your online presence. From concept to
          execution. `}
          </p>
          <p className="cz-p">
            {` Currently leading the tech team at `}
            <span className="cz-p">
              <Link
                href="https://loudmob.media"
                target="_blank"
                className="text-[#9333ea] hover:text-[#9233ea7b] transition-colors duration-300"
              >
                loudmob.media
              </Link>
            </span>
          </p>
        </AnimatedParagraph>

        <div
          ref={circularLinkRef}
          className="absolute bottom-10 h-24 w-24  lg:h-32 lg:w-32  cursor-pointer  "
        >
          <div className="circle-button-landing h-full w-full flex justify-center items-center">
            <div className="circle-button-landing-moon"></div>

            <div className=" relative w-full h-[3em] basic-color-transition">
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
    </div>
  );
};

export default Landing;
