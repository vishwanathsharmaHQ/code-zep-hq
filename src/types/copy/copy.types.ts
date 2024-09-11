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

// Type definition for the About page content
export type AboutPageCopy = {
  heroSection: {
    heading: string;
    description: string;
    cta: CTA;
  };
  servicesSection: {
    heading: string;
    description: string[];
    cta: CTA;
  };
  teamSection: {
    heading: string;
    description: string;
    members: TeamMember[];
  };
  missionSection: {
    heading: string;
    description: string[];
  };
  visionSection: {
    heading: string;
    description: string[];
  };
};

// Type definition for team member details
export type TeamMember = {
  name: string;
  role: string;
  image: string; // URL for the team member's image
  bio: string;
};


// copytypes.ts

export interface SEOData {
  title: string;
  description: string;
  thumbnail: string;
  openGraph: {
    images: string[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
}

export interface WorkPageCopy {
  seo: SEOData;
  mainHeading: {
    desktop: string[];
    mobile: string[];
  };
  archiveButton: {
    text: string;
    link: string;
  };
}


// copytypes.ts

export interface SEOData {
  title: string;
  description: string;
  thumbnail: string;
  openGraph: {
    images: string[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
}

export interface ArchivePageCopy {
  seo: SEOData;
  mainHeading: {
    desktop: string[];
    mobile: string[];
  };
}