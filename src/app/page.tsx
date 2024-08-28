import Footer from "@/components/footer/Footer";
import About from "@/components/sections/home/about/About";
import CaseStudies from "@/components/sections/home/casestudies/CaseStudies";
import Clients from "@/components/sections/home/clients/Clients";
import Contact from "@/components/sections/home/contact/Contact";
import Experience from "@/components/sections/home/experience/Experience";
import Landing from "@/components/sections/home/landing/Landing";
import { GLOBAL_SEO_DATA } from "@/utils/data/seo/seo";

const { title, description, thumbnail } = GLOBAL_SEO_DATA.home;

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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between page-padding">
      <Landing />
      <About />
      <CaseStudies />
      <Experience />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
