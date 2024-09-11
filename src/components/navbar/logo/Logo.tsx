import Image from "next/image";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="text-inherit flex items-center gap-2">
      <Image
        width={32}
        height={32}
        alt="logo_image"
        src="/images/kdotdevwhite.png"
      />
      <h2 className="text-3xl lg:text-4xl nav-logo text-inherit">
        code-zephyr
        {/* k<span className="font-black text-[#9333ea]">dot</span>dev */}
      </h2>
    </div>
  );
};

export default Logo;
