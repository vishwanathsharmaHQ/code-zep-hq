"use client";

import { useMainContext } from "@/context/MainContext";
import {
  SOCIAL_LINK_INSTAGRAM,
  SOCIAL_LINK_LINKEDIN,
  SOCIAL_LINK_TWITTER,
} from "@/utils/data/seo/social";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/utils/icons/SocialIcons/SocialIcons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AtSignIcon from "../common/icons/AtSignIcon";
import PageTransitionLink from "../common/links/PageTransitionLink";
import Logo from "./logo/Logo";
import Burger from "./menu/burger";
import Cross from "./menu/cross";
import Menu from "./menu/menu";

const Nav = () => {
  // const [isNav, setIsNav] = useState(false);

  const { isNav, setIsNav } = useMainContext();

  // State to keep track of last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  useGSAP(() => {
    // preload images then remove loader (loading class)
    // preloadImages('.tiles__line-img').then(() => document.body.classList.remove('loading'))
    //
    document.body.classList.remove("loading");
    // frame element
    const frame = document.querySelector(".alternate_nav_frame");

    // overlay (SVG path element)
    const overlayPath = document.querySelector(".overlay__path");

    // menu (wrap) element
    const menuWrap = document.querySelector(".menu-wrap");

    const atSignLogo = document.querySelector(".atSignLogo");

    if (!menuWrap) return;
    if (!frame) return;
    if (!overlayPath) return;

    // menu items
    const menuItems = menuWrap.querySelectorAll(".menu__item");

    // open menu button
    const openMenuCtrl = document.querySelector("button.button-menu");

    // close menu button
    const closeMenuCtrl = menuWrap.querySelector(".button-close");

    if (!menuItems) return;
    if (!openMenuCtrl) return;
    if (!closeMenuCtrl) return;
    if (!atSignLogo) return;

    // big title elements
    const title = {
      main: document.querySelector(".alternate_nav_content__title-main"),
      sub: document.querySelector(".alternate_nav_content__title-sub"),
    };

    let isAnimating = false;

    // opens the menu
    const openMenu = () => {
      if (isAnimating) return;
      isAnimating = true;
      gsap
        .timeline({
          onComplete: (): void => {
            isAnimating = false;
          },
        })
        .set(overlayPath, {
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(
          overlayPath,
          {
            duration: 0.8,
            ease: "power4.in",
            attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
          },
          0
        )
        .to(overlayPath, {
          duration: 0.3,
          ease: "power2",
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
          onComplete: () => {
            frame.classList.add("frame--menu-open");
            menuWrap.classList.add("menu-wrap--open");
          },
        })
        // title elements
        // .to([title.main, title.sub], {
        //     duration: 0.8,
        //     ease: 'power3.in',
        //     y: -200,
        //     stagger: 0.05
        // }, 0.2)

        // now reveal
        .set(menuItems, {
          opacity: 0,
        })
        .set(overlayPath, {
          attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
        })
        .to(overlayPath, {
          duration: 0.3,
          ease: "power2.in",
          attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
        })
        .to(overlayPath, {
          duration: 0.8,
          ease: "power4",
          attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
        })
        // menu items translate animation
        .to(
          menuItems,
          {
            duration: 1.1,
            ease: "power4",
            startAt: { y: 150 },
            y: 0,
            opacity: 1,
            stagger: 0.05,
          },
          ">-=1.1"
        );
    };

    // closes the menu
    const closeMenu = () => {
      if (isAnimating) return;

      isAnimating = true;

      document
        .querySelector(".burger-menu-icon-closed")
        ?.classList.remove("opened");

      gsap
        .timeline({
          onComplete: (): void => {
            isAnimating = false;
          },
        })
        .set(overlayPath, {
          attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
        })
        .to(
          overlayPath,
          {
            duration: 0.8,
            ease: "power4.in",
            attr: { d: "M 0 0 V 50 Q 50 100 100 50 V 0 z" },
          },
          0
        )
        .to(overlayPath, {
          duration: 0.3,
          ease: "power2",
          attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
          onComplete: () => {
            frame.classList.remove("frame--menu-open");
            menuWrap.classList.remove("menu-wrap--open");
          },
        })

        // now reveal
        .set(overlayPath, {
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        })
        .to(overlayPath, {
          duration: 0.3,
          ease: "power2.in",
          attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
        })
        .to(overlayPath, {
          duration: 0.8,
          ease: "power4",
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })

        // menu items translate animation
        .to(
          menuItems,
          {
            duration: 0.8,
            ease: "power2.in",
            y: 100,
            opacity: 0,
            stagger: -0.05,
          },
          0
        );
    };

    const socialsSidebarTimeline = gsap.timeline({ paused: true });

    socialsSidebarTimeline.fromTo(
      ".nav-social-icon",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        opacity: 1,
        xPercent: 0,
        stagger: 0.25,
        ease: "power4.out",
      }
    );

    let isPlaying = false;

    atSignLogo.addEventListener("click", () => {
      if (!isPlaying) {
        socialsSidebarTimeline.play();
        isPlaying = true;
      } else {
        socialsSidebarTimeline.reverse();
        isPlaying = false;
      }
    });

    // atSignLogo.addEventListener("mouseout", () => {
    //   socialsSidebarTimeline.reverse();
    // });

    // click on menu button
    openMenuCtrl.addEventListener("click", openMenu);
    // click on close menu button
    closeMenuCtrl.addEventListener("click", closeMenu);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navContainer = document.querySelector(".alternate_nav_container");

      if (!navContainer) return;
      if (isNav) return;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        gsap.to(navContainer, {
          duration: 1,
          y: "-10vh",
          ease: "power3.out",
        });
      } else {
        gsap.to(navContainer, { duration: 1, y: "0vh", ease: "power3.out" });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isNav]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed z-50 w-12 mx-[1%] bottom-10 left-0">
        <div className="flex flex-col gap-8 items-center ">
          <Link
            target="_blank"
            rel="noopener"
            href={SOCIAL_LINK_INSTAGRAM.link}
          >
            <InstagramIcon className="w-8 h-8 flex justify-center items-center nav-social-icon" />
          </Link>

          <Link target="_blank" rel="noopener" href={SOCIAL_LINK_TWITTER.link}>
            <TwitterIcon className="w-8 h-8 flex justify-center items-center nav-social-icon" />
          </Link>

          <Link target="_blank" rel="noopener" href={SOCIAL_LINK_LINKEDIN.link}>
            <LinkedinIcon className="w-8 h-8 flex justify-center items-center nav-social-icon" />
          </Link>
        </div>
      </div>
      <main className="alternate_nav_container">
        <div className="alternate_nav_frame w-full">
          {/* <div className="blur_overlay border absolute w-full h-16 top-[2%] -translate-y-1/2 left-0" /> */}
        </div>

        <div className="absolute w-full  p-[5%] md:p-[1%] pointer-events-auto">
          <div
            className={`w-full h-full flex justify-between items-center debug-nav p-[0.5em] px-[1em] ${
              isScrolled
                ? "bg-black/30 backdrop-blur-md rounded-full text-white"
                : "bg-transparent"
            }`}
          >
            <div className="alternate_nav_frame__author h-full flex items-center  ">
              <div className="font-bold pointer-events-auto cursor-pointer atSignLogo">
                <AtSignIcon />
              </div>
            </div>
            <PageTransitionLink
              href="/"
              className={` text-white alternate_nav_frame__heading h-full flex justify-center items-center transition-all duration-300 `}
            >
              <Logo />
            </PageTransitionLink>

            <div className="alternate_nav_frame__button h-full ">
              <button
                className="unbutton button-menu -mr-2"
                aria-label="Open menu"
              >
                <Burger isNav={isNav} setIsNav={setIsNav} />
              </button>
            </div>
          </div>
        </div>

        <div className="alternate_nav_content"></div>

        <div className="menu-wrap">
          <div className="tiles"></div>
          <Menu />
          <button className="unbutton button-close m-[5%] lg:m-[1%]">
            <Cross isNav={isNav} setIsNav={setIsNav} />
          </button>
        </div>

        <svg
          className="overlay"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            className="overlay__path"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </svg>
      </main>
    </>
  );
};

export default Nav;
