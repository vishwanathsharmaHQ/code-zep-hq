import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

type animationInProps = {
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
  isNavAnimating: boolean;
  setIsNavAnimating: Dispatch<SetStateAction<boolean>>;
  href: string;
  router: AppRouterInstance;
};

type animationOutProps = {
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
};

type navAnimationOutProps = {
  isNavAnimating: boolean;
  setIsNavAnimating: Dispatch<SetStateAction<boolean>>;
};

// opens the menu
export const slideIn = (params: animationInProps) => {
  const {
    isAnimating,
    setIsAnimating,
    isNavAnimating,
    setIsNavAnimating,
    href,
    router,
  } = params;

  if (isAnimating) return;
  //   setIsAnimating( true);
  setIsAnimating(true);
  // overlay (SVG path element)
  const overlayPath = document.querySelector(".page-transition-overlay__path");

  if (!overlayPath) return;

  gsap
    .timeline({
      onComplete: (): void => {
        router.push(href);
        setIsAnimating(false);
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
      onStart: () => {
        closeMenu({ isNavAnimating, setIsNavAnimating });
      },
    });
};

export const loadingSlideIn = (params: animationOutProps) => {
  const { isAnimating, setIsAnimating } = params;

  if (isAnimating) return;

  setIsAnimating(true);
  // overlay (SVG path element)
  const overlayPath = document.querySelector(".page-transition-overlay__path");

  if (!overlayPath) return;

  gsap.set(overlayPath, {
    attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
    onComplete: () => {
      setIsAnimating(false);
    },
  });
};

// closes the menu
export const slideOut = (params: animationOutProps) => {
  const { isAnimating, setIsAnimating } = params;

  if (isAnimating) return;

  setIsAnimating(true);
  // overlay (SVG path element)
  const overlayPath = document.querySelector(".page-transition-overlay__path");

  if (!overlayPath) return;

  gsap
    .timeline({
      onComplete: (): void => {
        setIsAnimating(false);
      },
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
    .set(overlayPath, {
      attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
    });
};

// closes the menu
export const closeMenu = (params: navAnimationOutProps) => {
  const { isNavAnimating, setIsNavAnimating } = params;

  const frame = document.querySelector(".alternate_nav_frame");

  // overlay (SVG path element)
  const overlayPath = document.querySelector(".overlay__path");

  // menu (wrap) element
  const menuWrap = document.querySelector(".menu-wrap");

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

  if (isNavAnimating) return;

  setIsNavAnimating(true);

  document
    .querySelector(".burger-menu-icon-closed")
    ?.classList.remove("opened");

  gsap
    .timeline({
      defaults: {
        // duration: 0.01,
      },
      onComplete: (): void => {
        setIsNavAnimating(false);
      },
    })
    .set(overlayPath, {
      attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
    })
    .set(
      overlayPath,
      {
        ease: "power4.in",
        attr: { d: "M 0 0 V 50 Q 50 100 100 50 V 0 z" },
      },
      0
    )
    .set(overlayPath, {
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
    .set(overlayPath, {
      // duration: 0.3,
      ease: "power2.in",
      attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
    })
    .set(overlayPath, {
      // duration: 0.8,
      ease: "power4",
      attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
    })

    // menu items translate animation
    .set(
      menuItems,
      {
        // duration: 0.8,
        ease: "power2.in",
        y: 100,
        opacity: 0,
        stagger: -0.05,
      },
      0
    );
};
