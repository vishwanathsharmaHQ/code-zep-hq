"use client";

import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { homePageCopy } from "@/utils/temp-data/copy";

type Props = {};

const Clients = (props: Props) => {
  useGSAP(() => {
    const items = gsap.utils.toArray(".clientImage");

    gsap.fromTo(
      items,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".clientsContainer",
          start: "top center",
          end: "top top",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="w-full">
      <div className="clientsContainer">
        <AnimatedSubheading className="overflown-subheading cz-h2 font-normal font-fancy text-balance leading-tight text-center pb-24 lg:block hidden">
          {homePageCopy.clients?.heading}
        </AnimatedSubheading>

        <AnimatedSubheading className="overflown-subheading cz-h2 font-normal font-fancy text-balance leading-tight text-center pb-24 lg:hidden block">
          {homePageCopy.clients?.heading}
        </AnimatedSubheading>
      </div>

      <div className="w-full grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1">
        {clientData.map((client) => (
          <div
            key={client.alt}
            className="overflow-hidden text-center bg-[#111111] border border-white/10 rounded-xl aspect-square flex items-center justify-center opacity-30 hover:opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              width={client.width}
              height={client.height}
              alt={client.alt}
              src={client.src}
              className={`w-${client.width} h-${client.height} object-contain clientImage ${client.additionalClasses}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const clientData = [
  {
    width: 256,
    height: 256,
    alt: "client-image-creativeapes",
    src: "/images/clients/creativeapes.webp",
    additionalClasses: "",
  },
  {
    width: 256,
    height: 256,
    alt: "client-image-lmm",
    src: "/images/clients/lmm.svg",
    additionalClasses: "",
  },
  {
    width: 256,
    height: 256,
    alt: "client-image-meraki",
    src: "/images/clients/Meraki_Logo_Black_360x.avif",
    additionalClasses: "invert grayscale saturate-0",
  },
  {
    width: 128,
    height: 128,
    alt: "client-image-edi",
    src: "/images/clients/edilogo.png",
    additionalClasses: "",
  },
  {
    width: 256,
    height: 256,
    alt: "client-image-aarkay",
    src: "/images/clients/aarkayLogo.png",
    additionalClasses: "",
  },
  {
    width: 150,
    height: 150,
    alt: "client-image-gnoo",
    src: "/images/clients/gnoo.png",
    additionalClasses: "",
  },
  {
    width: 256,
    height: 256,
    alt: "client-image-tata",
    src: "/images/clients/tata.webp",
    additionalClasses: "",
  },
  {
    width: 256,
    height: 256,
    alt: "client-image-thunder",
    src: "/images/clients/thunder.webp",
    additionalClasses: "",
  },
  {
    width: 128,
    height: 128,
    alt: "mad-drop",
    src: "/images/clients/hydra.png",
    additionalClasses: "",
  },
  {
    width: 256,
    height: 256,
    alt: "glass-frog",
    src: "/images/clients/glass-frog.png",
    additionalClasses: "",
  },
];

export default Clients;
