"use client";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/utils/icons/SocialIcons/SocialIcons";
import gsap from "gsap";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import PageTransitionLink from "../common/links/PageTransitionLink";
import Logo from "../navbar/logo/Logo";
import AnimatedSubheading from "../common/animated/Subheadings/Subheadings";
import {
  SOCIAL_LINK_GITHUB,
  SOCIAL_LINK_INSTAGRAM,
  SOCIAL_LINK_LINKEDIN,
  SOCIAL_LINK_TWITTER,
} from "@/utils/data/seo/social";
type Props = {};

const Footer = (props: Props) => {
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(iconRef.current, {
      yPercent: -50, // Move up by 20px
      duration: 0.7,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(iconRef.current, {
      yPercent: 0, // Return to original position
      duration: 0.7,
      ease: "power2.inOut",
    });
  };

  const handleScrollToTop = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  };

  return (
    <div className="w-full h-full lg:h-screen relative">
      <div className="w-full h-full flex flex-col">
        <div className="w-full flex flex-col items-start py-10 ">
          <AnimatedSubheading>
            <div className="common-pagesubheading font-fancy leading-tight overflow-hidden">
              {`Let's get to work!`}
            </div>
          </AnimatedSubheading>
        </div>
        <div className="  w-full h-full">
          <footer className="bg-black text-white  flex flex-col justify-between h-full">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ">
              <div className="flex flex-col items-start">
                <div className="flex items-center mb-4">
                  <Logo />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-2xl font-bold mb-4 font-fancy">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <PageTransitionLink
                      className="text-white/60 hover:text-white text-xl "
                      href="/"
                    >
                      Home
                    </PageTransitionLink>
                  </li>
                  <li>
                    <PageTransitionLink
                      className="text-white/60 hover:text-white text-xl"
                      href="/about"
                    >
                      About
                    </PageTransitionLink>
                  </li>
                  <li>
                    <PageTransitionLink
                      className="text-white/60 hover:text-white text-xl"
                      href="/work"
                    >
                      Work
                    </PageTransitionLink>
                  </li>

                  <li>
                    <PageTransitionLink
                      className="text-white/60 hover:text-white text-xl"
                      href="/admin/"
                    >
                      Admin
                    </PageTransitionLink>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-2xl font-bold mb-4 font-fancy">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      className="text-white/60 hover:text-white text-xl"
                      href="https://v1.kartikjha.com"
                      target="_blank"
                    >
                      Portfolio v1
                    </a>
                  </li>

                  {/* <li>
                    <Link
                      className="text-white/60 hover:text-white text-xl"
                      href="#"
                    >
                      Blog
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      className="text-white/60 hover:text-white text-xl"
                      href="#"
                    >
                      FAQs
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-2xl font-bold mb-4 font-fancy">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-white/60 hover:text-white text-xl"
                      href="mailto:connect@kartikjha.com"
                    >
                      connect@kartikjha.com
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white/60 hover:text-white text-xl"
                      href="#"
                    >
                      India
                    </Link>
                  </li>

                  <li className="flex space-x-4 py-5">
                    <Link
                      className="text-white/60 hover:text-white text-xl p-5 bg-black/30 border-2 border-gray-400 hover:border-white duration-300 transition-colors rounded-full backdrop-blur-sm"
                      href={SOCIAL_LINK_TWITTER.link}
                    >
                      <TwitterIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      className="text-white/60 hover:text-white text-xl p-5 bg-black/30 border-2 border-gray-400 hover:border-white duration-300 transition-colors rounded-full backdrop-blur-sm"
                      href={SOCIAL_LINK_GITHUB.link}
                    >
                      <GithubIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      className="text-white/60 hover:text-white text-xl p-5 bg-black/30 border-2 border-gray-400 hover:border-white duration-300 transition-colors rounded-full backdrop-blur-sm"
                      href={SOCIAL_LINK_INSTAGRAM.link}
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      className="text-white/60 hover:text-white text-xl p-5 bg-black/30 border-2 border-gray-400 hover:border-white duration-300 transition-colors rounded-full backdrop-blur-sm"
                      href={SOCIAL_LINK_LINKEDIN.link}
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8 lg:mt-12 text-center text-white/60 text-sm py-10">
              © 2024 kartikjha.com All rights reserved.
            </div>
          </footer>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-0 my-10 lg:size-32 size-8 border-2 lg:border-[4px] rounded-full overflow-hidden cursor-pointer  "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleScrollToTop}
      >
        <div
          className="w-full flex flex-col justify-center items-center"
          ref={iconRef}
        >
          <ArrowUpIcon
            className="h-full w-full"
            strokeWidth={1}
            stroke="#ffffff"
          />

          <ArrowUpIcon
            className="h-full w-full"
            strokeWidth={1}
            stroke="#ffffff"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
