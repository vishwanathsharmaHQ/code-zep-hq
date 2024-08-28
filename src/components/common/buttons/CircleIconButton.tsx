import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type Props = {
  icon: ReactElement<any, any>;
  isActive: boolean;
};

const CircleIconButton = (props: Props) => {
  return (
    <div
      className={`${
        props.isActive ? "bg-white" : ""
      } transition-colors duration-300 border-2 p-4 rounded-full`}
    >
      {props.icon}
    </div>
  );
};

export default CircleIconButton;
