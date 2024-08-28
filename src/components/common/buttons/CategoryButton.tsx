import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  text: string;
  // activeCategory: string;
  // setActiveCategory: Dispatch<SetStateAction<string>>;
};

const CategoryButton = (props: Props) => {
  // const handleCategoryChange = (category: string) => {
  //   props.setActiveCategory(category);
  // };

  const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   if (props.activeCategory === props.text) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }

  //   return () => {};
  // }, [props.activeCategory]);

  return (
    <div
      // onClick={() => handleCategoryChange(props.text)}
      className={`${
        isActive ? "bg-white text-black border-2" : "border-2 text-white "
      } transition-colors duration-300 cursor-pointer font-semibold inline-flex p-4 rounded-full flex-1 text-center justify-center`}
    >
      {props.text}
    </div>
  );
};

export default CategoryButton;
