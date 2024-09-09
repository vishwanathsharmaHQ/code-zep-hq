import { FooterCopy, HomePageCopy, ExperienceCopy} from "@/types/copy/copy.types";

export const homePageCopy: HomePageCopy = {
  heroSection: {
    heading:
      "Welcome to <br /> our Innovative <br /> and creative <br /> world  <br />",
    cta: {
      ctaText: "Work with us",
      ctaLink: "/work",
    },
  },
  aboutSection: {
    heading: "About Us",
    cta: {
      ctaText: "Learn More",
      ctaLink: "/about",
    },
    desc: [
      {
        text: "We are a leading company in innovation and technology, dedicated to delivering top-notch solutions to our clients.",
      },
    ],
  },
  projects: {
    heading: "Our Projects",
  },

  clients: {
    heading: "Brands and Affiliates that I've worked with",
  },

  sections: [
    {
      heading: "Services",
      desc: [
        {
          text: "We offer a wide range of services tailored to meet your needs, from consulting to full-scale project development.",
        },
        {
          text: "Our team is equipped with the latest tools and knowledge to ensure your project is a success.",
        },
      ],
      cta: {
        ctaText: "Explore Services",
        ctaLink: "/services",
      },
    },
    {
      heading: "Testimonials",
      desc: [
        {
          text: "Our clients love working with us because of our dedication and commitment to excellence.",
        },
        { text: "Hear what they have to say about their experience." },
      ],
    },
    {
      heading: "Contact Us",
      desc: [
        {
          text: "Have a project in mind? Reach out to us today, and let's start building something great together.",
        },
      ],
      cta: {
        ctaText: "Get in Touch",
        ctaLink: "/contact",
      },
    },
  ],
};



export const experienceCopy: ExperienceCopy = {
  heading: "Our Services",
  description:
    "Explore the milestones and achievements that have shaped our professional growth.",
};

export const footerCopy: FooterCopy = {
  heading: "Stay Connected",
  quickLinks: [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
  ],
  socials: [
    {
      link: { text: "Twitter", href: "https://twitter.com" },
      icon: "twitter-icon.svg",
    },
    {
      link: { text: "LinkedIn", href: "https://linkedin.com" },
      icon: "linkedin-icon.svg",
    },
    {
      link: { text: "Facebook", href: "https://facebook.com" },
      icon: "facebook-icon.svg",
    },
  ],
  copyRight: {
    text: "© 2024 Company Name. All rights reserved.",
  },
};
