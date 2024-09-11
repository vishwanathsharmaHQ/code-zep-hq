import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import Footer from "@/components/footer/Footer";
import AboutLanding from "@/components/sections/about/AboutLanding";
import { AboutServicesAccordion } from "@/components/sections/home/about/AboutServicesAccordion";
import { GLOBAL_SEO_DATA } from "@/utils/data/seo/seo";
import { aboutPageCopy } from "@/utils/temp-data/copy";

type Props = {};

const { title, description, thumbnail } = GLOBAL_SEO_DATA.about;

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    images: [thumbnail],
  },
  twitter: {
    card: thumbnail,
    title: title,
    description: description,
    images: [thumbnail], // Must be an absolute URL
  },
};

const About = (props: Props) => {
  const {
    heading,
    subheading,
    servicesHeading,
    servicesDescription,
    accordion,
  } = aboutPageCopy;

  return (
    <div className="page-padding w-full ">
      <AboutLanding />
      <div className="lg:py-10 text-center">
        <AnimatedSubheading className="mx-auto text-center">
          <h2 className="common-pagesubheading overflow-hidden font-fancy leading-tight">
            {servicesHeading}
          </h2>
        </AnimatedSubheading>
        <h3 className="common-subheading font-fancy py-5 pb-2 lg:py-10 lg:pb-10 text-balance">
          {servicesDescription}
        </h3>
      </div>

      <div>
        <AboutServicesAccordion accordionData={accordion} />
      </div>

      <Footer />
    </div>
  );
};

export default About;
