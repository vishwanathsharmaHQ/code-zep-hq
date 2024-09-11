import {
  FooterCopy,
  HomePageCopy,
  ExperienceCopy,
  AboutPageCopy,
} from "@/types/copy/copy.types";

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
    heading: "Brands and Affiliates <br /> that We've worked with",
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

export const experienceCopy: ExperienceCopy = {
  heading: "Our Services",
  description:
    "Explore the range of services we offer across different tiers, tailored to meet various client needs.",
  tiers: [
    {
      company: "Tier 1: Basic Web Development",
      isCurrent: true,
      fromTo: {
        from: "2024",
        to: "Ongoing",
      },
      position: "Basic Web Services",
      mainDescription:
        "Our Tier 1 services focus on basic website development and maintenance, ideal for small businesses looking to establish an online presence.",
      achievements: [
        {
          type: "Dev",
          text: "Responsive design across all devices",
        },
        {
          type: "SEO",
          text: "Basic SEO optimization to ensure better visibility in search engines.",
        },
        {
          type: "CMS",
          text: "Content management integration (e.g., WordPress) for easy updates.",
        },
      ],
    },
    {
      company: "Tier 2: Advanced Web Applications",
      isCurrent: true,
      fromTo: {
        from: "2023",
        to: "Ongoing",
      },
      position: "Advanced Web Solutions",
      mainDescription:
        "Our Tier 2 services offer full-stack web application development, ideal for businesses looking for dynamic functionalities and interactive user experiences.",
      achievements: [
        {
          type: "Dev",
          text: "E-commerce platforms with payment gateway integration.",
        },
        {
          type: "API",
          text: "Custom API development for seamless third-party integrations.",
        },
        {
          type: "Performance",
          text: "Optimized for performance with advanced SEO and caching strategies.",
        },
      ],
    },
    {
      company: "Tier 3: Enterprise Solutions",
      isCurrent: true,
      fromTo: {
        from: "2022",
        to: "Ongoing",
      },
      position: "Enterprise-Level Solutions",
      mainDescription:
        "Our Tier 3 services provide custom enterprise-grade solutions, including cloud infrastructure and scalable architectures for large-scale deployments.",
      achievements: [
        {
          type: "Cloud",
          text: "Cloud infrastructure setup with AWS, Azure, or Google Cloud.",
        },
        {
          type: "Security",
          text: "Enterprise-level security and compliance for data-sensitive projects.",
        },
        {
          type: "Scaling",
          text: "Scalable architecture designed to handle high traffic and load.",
        },
      ],
    },
  ],
};

export const contactCopy = {
  heading: "Get in touch",
  subheading:
    "This is the part where you get in touch and we make amazing things happen.",
  emailText: "connect@codezep.com", // Update this email address as needed
  emailDescription: "to set up an introductory call",
};

export const aboutPageCopy = {
  heading: "About Us",
  subheading: "Discover who we are, what we do, and how we can help you.",
  servicesHeading: "What We Can Do",
  servicesDescription:
    "Whether you have a clear vision or just a budding idea, we're here to collaborate with you to bring your concepts to life.",
  accordion: {
    strategy: {
      title: "Strategy",
      description:
        "Understand your needs, set a solid foundation, and transform your business.",
      items: [
        {
          heading: "Discovery Sessions",
          description:
            "Dive deep into your business, goals, and challenges to uncover opportunities.",
        },
        {
          heading: "Competitor Analysis",
          description:
            "Understand the competitive landscape and identify your unique positioning.",
        },
        {
          heading: "User Journey Mapping",
          description:
            "Map out the user experience and identify pain points to create seamless interactions.",
        },
        {
          heading: "Information Architecture",
          description:
            "Organize content and functionality to create a clear and intuitive structure.",
        },
        {
          heading: "Vision Setting",
          description:
            "Collaborate to define a clear vision and roadmap for your project.",
        },
        {
          heading: "Business Transformation",
          description:
            "Identify opportunities to improve your business processes and operations.",
        },
      ],
    },
    design: {
      title: "Design",
      description: "Crafting intuitive and engaging user experiences.",
      items: [
        {
          heading: "Heuristic Evaluation",
          description:
            "Assess the usability and accessibility of your existing design.",
        },
        {
          heading: "Idea Generation",
          description:
            "Brainstorm and explore innovative design concepts and solutions.",
        },
      ],
    },
    development: {
      title: "Development",
      description:
        "Bringing your designs to life with robust and scalable code.",
      items: [
        {
          heading: "Static Websites",
          description:
            "Fast, secure, and SEO-friendly static websites built with modern frameworks.",
        },
        {
          heading: "CMS Integration",
          description:
            "Seamlessly integrate your designs with popular content management systems.",
        },
      ],
    },
  },
};

export const workPageCopy = {
  seo: {
    title: "Work",
    description: "Explore our projects that transform ideas into groundbreaking digital realities.",
    thumbnail: "thumbnail-url",
    openGraph: {
      images: ["thumbnail-url"],
    },
    twitter: {
      card: "thumbnail-url",
      title: "Work",
      description: "Explore our projects that transform ideas into groundbreaking digital realities.",
      images: ["thumbnail-url"],
    },
  },
  mainHeading: {
    desktop: [
      "Fucking with ideas",
      "into groundbreaking",
      "digital realities"
    ],
    mobile: [
      "Transforming",
      "ideas into",
      "groundbreaking",
      "digital realities"
    ]
  },
  archiveButton: {
    text: "Archive",
    link: "/work/archive"
  }
};



export const archivePageCopy = {
  seo: {
    title: "Work Archive",
    description: "Preserving moments of digital innovation for the curious.",
    thumbnail: "archive-thumbnail-url",
    openGraph: {
      images: ["archive-thumbnail-url"],
    },
    twitter: {
      card: "archive-thumbnail-url",
      title: "Work Archive",
      description: "Preserving moments of digital innovation for the curious.",
      images: ["archive-thumbnail-url"],
    },
  },
  mainHeading: {
    desktop: [
      "Landur",
      "of digital innovation",
      "for the curious"
    ],
    mobile: [
      "Landur",
      "moments of",
      "digital innovation",
      "for the curious"
    ]
  }
};