import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import MinimalContactForm from "@/components/common/form/MinimalContactForm";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="w-full">
      <div className=" flex mx-auto pt-[10%]">
        <div className="flex flex-col w-full">
          <AnimatedSubheading>
            <h2 className="common-pagesubheading font-fancy my-10 leading-tight overflow-hidden">
              Get in touch
            </h2>
          </AnimatedSubheading>

          <h4 className="font-fancy common-subheading w-full lg:w-4/6">
            This is the part where you get in touch and we make amazing things
            happen.
          </h4>

          <p className="text-balance cz-p">
            {`Fill out the form below or send an email at `}
            <span className=" text-white inline-block text-transparent bg-clip-text hover:cursor-pointer">
              <a
                href=""
                className="hover:underline decoration-[#9333ea]"
              >{` connect@kartikjha.com `}</a>
            </span>
            {` to set up an introductory call`}
          </p>
        </div>
      </div>
      <MinimalContactForm />
    </div>
  );
};

export default Contact;
