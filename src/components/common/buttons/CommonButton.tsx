"use client";

import React, { ButtonHTMLAttributes, ReactNode, useRef } from "react";

type CommonButtonVariant = "badge" | "small" | "medium" | "large";

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  variant?: CommonButtonVariant;
}

const getPaddingClasses = (variant: string) => {
  switch (variant) {
    case "badge":
      return "px-4 py-2 lg:px-6 lg:py-2";
    case "medium":
      return "px-8 py-4 lg:px-10 lg:py-4";
    case "large":
      return "px-16 py-8";
    default:
      return "";
  }
};

const CommonButton: React.FC<CommonButtonProps> = ({
  variant = "medium",
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const paddingClasses = getPaddingClasses(variant);

  return (
    <button
      ref={buttonRef}
      {...props}
      className={`common-button button--bestia border-2 inline-flex text-md lg:text-xl rounded-full font-corporate ${props.className}`}
    >
      <div className="button__bg"></div>
      <span className={`common-button-text  ${paddingClasses}`}>
        {props.children}
      </span>
    </button>
  );
};

export default CommonButton;
