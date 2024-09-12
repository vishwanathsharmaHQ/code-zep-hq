"use client";

import React from "react";
import {
  BarChart,
  Cloud,
  Code,
  Palette,
  Server,
  ShoppingCart,
  Smartphone,
  Wrench,
} from "lucide-react";
import ServiceCard from "./AboutServiceCard";
type Props = {};

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Dynamic, responsive web applications using React, Angular, Vue.js, and more.",
    technologies: [
      "Frontend: React, Angular, Vue.js, HTML5, CSS3, JavaScript, TypeScript",
      "Backend: Node.js, Express.js, Django, Ruby on Rails, PHP, Flask",
      "Databases: MySQL, PostgreSQL, MongoDB, Firebase, SQLite",
      "Other: GraphQL, RESTful APIs, WebSockets",
    ],
    subServices: [
      "Custom Website Development",
      "Single Page Applications (SPAs)",
      "eCommerce Solutions",
      "Content Management Systems (CMS)",
      "Web Portals",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Intuitive mobile applications for iOS and Android platforms.",
    technologies: [
      "Mobile: React Native, Flutter, Swift (iOS), Kotlin (Android)",
      "Backend: Firebase, AWS Lambda, GraphQL, Node.js",
    ],
    subServices: [
      "Cross-Platform Mobile App Development",
      "Native Mobile App Development (iOS & Android)",
      "Progressive Web Apps (PWAs)",
      "App Store Optimization & Maintenance",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Engaging, user-centered interfaces that combine aesthetics with functionality.",
    technologies: ["Figma, Sketch, Adobe XD, InVision, Zeplin"],
    subServices: [
      "UI/UX Design & Prototyping",
      "Wireframing & User Flow Design",
      "Interaction Design",
      "User Research & Testing",
      "Design System Creation",
    ],
  },
  {
    icon: Server,
    title: "Software Development",
    description:
      "Robust and scalable software solutions tailored to your business needs.",
    technologies: [
      "Languages: JavaScript, Python, Ruby, PHP, C#, Java, Go",
      "Frameworks: Node.js, Spring Boot, .NET, Django, Flask",
      "Databases: MySQL, PostgreSQL, MongoDB, Oracle, SQLite",
      "Cloud Services: AWS, Azure, Google Cloud Platform (GCP)",
    ],
    subServices: [
      "Custom Software Development",
      "API Development & Integration",
      "Microservices Architecture",
      "Enterprise Software Solutions",
      "SaaS Product Development",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Streamlined development processes and scalable cloud solutions.",
    technologies: [
      "AWS, Google Cloud, Microsoft Azure, Docker, Kubernetes, Jenkins, GitLab CI/CD",
    ],
    subServices: [
      "Cloud Infrastructure Setup & Management",
      "DevOps Automation & CI/CD Pipelines",
      "Containerization & Orchestration",
      "Cloud Migration & Optimization",
      "Performance Monitoring & Security",
    ],
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description:
      "Robust, scalable, and secure eCommerce solutions optimized for conversions.",
    technologies: [
      "Shopify, WooCommerce, Magento, OpenCart, BigCommerce",
      "Custom eCommerce Development with React, Angular, Node.js",
    ],
    subServices: [
      "eCommerce Website Development",
      "Payment Gateway Integration",
      "Shopping Cart Development",
      "eCommerce Mobile App Development",
      "Inventory & Order Management Systems",
    ],
  },
  {
    icon: BarChart,
    title: "Digital Marketing & SEO",
    description:
      "Data-driven strategies to establish a strong online presence.",
    technologies: ["Google Analytics, Google Ads, SEMrush, Moz, HubSpot"],
    subServices: [
      "SEO & SEM Optimization",
      "Content Strategy & Creation",
      "Social Media Management",
      "Pay-Per-Click (PPC) Advertising",
      "Email Marketing Campaigns",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Continuous support and maintenance services for smooth operations.",
    subServices: [
      "Website & App Maintenance",
      "Performance Optimization",
      "Security Audits & Bug Fixes",
      "Content Updates & Management",
    ],
  },
];

const AboutServicesGrid = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default AboutServicesGrid;
