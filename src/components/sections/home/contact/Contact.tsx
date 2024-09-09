import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import MinimalContactForm from "@/components/common/form/MinimalContactForm";
import { contactCopy } from "@/utils/temp-data/copy"; // Import copy
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex mx-auto pt-[10%]">
        <div className="flex flex-col w-full">
          <AnimatedSubheading>
            <h2 className="common-pagesubheading font-fancy my-10 leading-tight overflow-hidden">
              {contactCopy.heading} {/* Dynamically set the heading */}
            </h2>
          </AnimatedSubheading>

          <h4 className="font-fancy common-subheading w-full lg:w-4/6">
            {contactCopy.subheading} {/* Dynamically set the subheading */}
          </h4>

          <p className="text-balance cz-p">
            {`Fill out the form below or send an email at `}
            <span className="text-white inline-block text-transparent bg-clip-text hover:cursor-pointer">
              <a
                href={`mailto:${contactCopy.emailText}`} 
                className="hover:underline decoration-[#9333ea]"
              >
                {contactCopy.emailText}
              </a>
            </span>
            {` ${contactCopy.emailDescription}`} {/* Dynamically set the email description */}
          </p>
        </div>
      </div>
      <MinimalContactForm />
    </div>
  );
};

export default Contact;