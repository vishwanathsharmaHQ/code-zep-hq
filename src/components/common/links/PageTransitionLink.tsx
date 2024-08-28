"use client";

import { useMainContext } from "@/context/MainContext";
import { slideIn } from "@/utils/animations/transitions";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  className?: string;
  style?: object;
  children: React.ReactNode;
  isLogo?: boolean;
};

const PageTransitionLink = (props: Props) => {
  const pathname = usePathname();

  const router = useRouter();

  const { isAnimating, setIsAnimating, isNavAnimating, setIsNavAnimating } =
    useMainContext();

  const handleOverridenNextLinkNav = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (props.href === pathname) return;
    // Check if it's a normal left-click without any modifier keys
    const isNormalClick =
      !event.metaKey && !event.ctrlKey && event.button === 0;

    // If it's not a normal click, allow default behavior
    if (!isNormalClick) {
      return;
    }

    event.preventDefault();

    const slideOptions = {
      isAnimating: isAnimating,
      setIsAnimating: setIsAnimating,
      isNavAnimating: isNavAnimating,
      setIsNavAnimating: setIsNavAnimating,
      href: props.href,
      router: router,
    };

    slideIn(slideOptions);
  };

  return (
    <Link
      className={props.className}
      href={props.href}
      onClick={(event) => handleOverridenNextLinkNav(event)}
    >
      {props.children}
    </Link>
  );
};

export default PageTransitionLink;
