"use client";

import CircleIconButton from "@/components/common/buttons/CircleIconButton";
import CommonButton from "@/components/common/buttons/CommonButton";
import AppDrawerIcon from "@/components/common/icons/AppDrawerIcon";
import BurgerExtendedIcon from "@/components/common/icons/BurgerExtendedIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { Dispatch, SetStateAction, useRef } from "react";
type Props = {
  activeViewMode: string;
  setActiveViewMode: Dispatch<SetStateAction<string>>;
};

const CategoryMenu = (props: Props) => {
  const viewAllButtonRef = useRef<HTMLAnchorElement>(null);
  const viewModeButtonContainerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!viewModeButtonContainerRef.current) return;

    const categoryMenuTL = gsap.timeline({
      scrollTrigger: {
        trigger: viewAllButtonRef.current,
        start: "top bottom-=10%",
        end: "top center",
        toggleActions: "play none none none",
      },
    });

    categoryMenuTL
      .fromTo(
        viewAllButtonRef.current,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        viewModeButtonContainerRef.current.children,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          stagger: 0.1,
        },
        "<50%"
      );
  }, []);

  return (
    <div className="flex items-center">
      <div className="categories flex pt-10 w-2/5 lg:w-1/5 gap-5">
        <Link href="/work" ref={viewAllButtonRef}>
          <CommonButton variant="medium">View All</CommonButton>
        </Link>
      </div>

      <div
        className=" flex pt-10  w-3/5 lg:w-4/5 justify-end gap-5"
        ref={viewModeButtonContainerRef}
      >
        <div
          onClick={() => {
            props.setActiveViewMode("Block");
          }}
          className="cursor-pointer"
        >
          <CircleIconButton
            icon={
              <AppDrawerIcon
                color={props.activeViewMode === "Block" ? "black" : "white"}
              />
            }
            isActive={props.activeViewMode === "Block"}
          />
        </div>

        <div
          onClick={() => {
            props.setActiveViewMode("Lines");
          }}
          className="cursor-pointer"
        >
          <CircleIconButton
            icon={
              <BurgerExtendedIcon
                color={props.activeViewMode === "Lines" ? "black" : "white"}
              />
            }
            isActive={props.activeViewMode === "Lines"}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
