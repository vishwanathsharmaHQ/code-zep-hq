"use client";

import CircleIconButton from "@/components/common/buttons/CircleIconButton";
import AppDrawerIcon from "@/components/common/icons/AppDrawerIcon";
import BurgerExtendedIcon from "@/components/common/icons/BurgerExtendedIcon";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
type Props = {
  activeViewMode: string;
  setActiveViewMode: Dispatch<SetStateAction<string>>;
  projectNature: string;
};

const WorkCategoryMenu = (props: Props) => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row">
      <div className="categories flex pt-10 w-full lg:w-2/5 gap-5 ">
        {/* <NatureButton nature={"Featured"} currentNature={props.projectNature} />
        <NatureButton nature={"Work"} currentNature={props.projectNature} />
        <NatureButton nature={"Play"} currentNature={props.projectNature} /> */}
      </div>

      <div className="hidden lg:flex pt-10 w-3/5 justify-end gap-5">
        <div
          onClick={() => {
            props.setActiveViewMode("Block");
          }}
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

export default WorkCategoryMenu;

type NatureProps = {
  nature: string;
  currentNature: string;
};

const NatureButton = ({ nature, currentNature }: NatureProps) => {
  const isActive = nature === currentNature;

  return (
    <Link
      href={`?nature=${nature}`}
      className={`common-category-button ${
        isActive ? "bg-white text-black" : "bg-black text-white border-2"
      }`}
    >
      {nature}
    </Link>
  );
};
