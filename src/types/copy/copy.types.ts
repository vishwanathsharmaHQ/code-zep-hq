export type HomePageCopy = {
  heroSection: {
    heading: string;
    cta: CTA;
  };
  aboutSection: {
    heading: string;
    cta: CTA;
    desc: CopyDesc[];
  };
  projects?: {
    heading: string;
  };
  clients?: {
    heading: string; 
  };
  sections: GenericSection[];
};

export type CTA = {
  ctaText: string;
  ctaLink: string;
};

export type GenericSection = {
  heading: string;
  desc: CopyDesc[];
  cta?: CTA;
};

export type CopyDesc = {
  text: string;
};

export type FooterCopy = {
  heading: string;
  quickLinks: PageLink[];
  socials: SocialLink[];
  copyRight: CopyDesc;
};

export type PageLink = {
  text: string;
  href: string;
};

export type SocialLink = {
  link: PageLink;
  icon: string;
};

export interface ExperienceCopy {
  heading: string;
  description: string;
}

export interface ExperienceCopy {
  heading: string;
  description: string;
  tiers: {
    company: string;
    isCurrent: boolean;
    fromTo: {
      from: string;
      to: string;
    };
    position: string;
    mainDescription: string;
    achievements?: {
      type: string;
      text: string;
    }[];
  }[];
}

export interface ContactCopy {
  heading: string;
  subheading: string;
  emailText: string;
  emailDescription: string;
}