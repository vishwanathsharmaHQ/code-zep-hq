import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import PageTransitionLink from "@/components/common/links/PageTransitionLink";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <AnimatedSubheading className=" text-center">
        <h2 className="text-white text-8xl font-fancy text-balance leading-tight overflow-hidden text-center">
          Whoops! You seem to have
        </h2>

        <h2 className="text-white text-8xl font-fancy text-balance leading-tight overflow-hidden">
          found a portal to the void.
        </h2>
      </AnimatedSubheading>
      <p className="text-white/30 common-subheading font-fancy text-balance text-center py-10">
        {`   I'm probably working on the page you're trying to access right now. Come
        back later and let's see if I've plugged the hole!`}
      </p>
      <div className="h-32 w-32  cursor-pointer  ">
        <div className="circle-button-landing h-full w-full flex justify-center items-center">
          <div className="circle-button-landing-moon"></div>

          <div className=" relative w-full h-[3em] basic-color-transition">
            <PageTransitionLink
              href="/work"
              className="font-fancy absolute left-1/2 -translate-x-1/2 w-[200%] h-full text-3xl flex items-center justify-center bg-black py-4"
            >
              Explore
            </PageTransitionLink>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default NotFoundPage;
