"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) {
      // Animate overlay in on hover
      gsap.to(overlayRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.3,
        ease: "power3.out",
      });

      // Animate card content out on hover
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      // Animate overlay out on mouse leave
      gsap.to(overlayRef.current, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.3,
        ease: "power3.out",
      });

      // Animate card content back in on mouse leave
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className="backdrop-filter backdrop-blur-lg p-6 rounded-2xl cursor-pointer relative overflow-hidden border border-gray-700/30  hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay is always rendered but controlled via GSAP */}
      <div
        ref={overlayRef}
        className="absolute inset-0 p-5 bg-gradient-to-r from-[#9233ea79] to-[#9233ea2f] backdrop-blur-lg flex flex-col items-center justify-center  shadow-lg space-y-4"
      >
        <p className="text-white text-lg font-semibold ">
          Discover our {title.toLowerCase()} services
        </p>
        <div className="flex justify-center gap-5">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 ">
            Explore Now
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-white border-2 rounded-md hover:bg-gray-100 hover:text-black ">
            Contact Us
          </button>
        </div>
      </div>

      {/* Card content that animates out on hover */}
      <div ref={contentRef}>
        <Icon className="h-12 w-12 mb-4 text-purple-400 " />
        <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
        <p className="text-gray-400 ">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
