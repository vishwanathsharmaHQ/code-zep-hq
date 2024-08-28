import { RESUME_DATA } from "@/utils/data/resume/resume";
import React from "react";

interface PersonalInfo {
  name: string;
  website: string;
  position: string;
  location: string;
  email: string;
}

const Header: React.FC<{ info: PersonalInfo }> = ({ info }) => (
  <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div className="mb-8 md:mb-0">
      <h1 className="text-4xl font-bold">{info.name}</h1>
      <p className="text-xl mt-2">
        <a href={info.website} className="text-purple-500">
          {info.website}
        </a>
      </p>
      <h2 className="text-2xl text-gray-400 mt-4">{info.position}</h2>
    </div>
    <div className="text-right">
      <p>{info.location}</p>
      <p>
        Email:{" "}
        <a href={`mailto:${info.email}`} className="text-purple-500">
          {info.email}
        </a>
      </p>
    </div>
  </header>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mb-16">
    <h3 className="text-2xl font-semibold text-purple-500 mb-4">{title}</h3>
    {children}
  </section>
);

const ResumePage = () => {
  const {
    personalInfo,
    education,
    workExperiences,
    skills,
    tools,
    technologies,
  } = RESUME_DATA;

  return (
    <div className="bg-black text-white min-h-screen py-48 page-padding">
      <div className="mx-auto">
        <Header info={personalInfo} />
        <hr className="border-gray-600 mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <Section title="Education">
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="mb-1">{edu.institution}</p>
                  <p className="text-gray-400">{edu.degree}</p>
                </div>
              ))}
            </Section>
            <Section title="Work Experiences">
              {workExperiences.map((work, index) => (
                <div key={index} className="mb-8">
                  <h4 className="text-xl font-bold">{work.company}</h4>
                  <p className="italic text-gray-400">{work.duration}</p>
                  <h5 className="text-lg font-semibold mt-2">
                    {work.position}
                  </h5>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    {work.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>
          </div>
          <div>
            <Section title="Contact">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-purple-500"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p>
                Portfolio:{" "}
                <a href={personalInfo.website} className="text-purple-500">
                  {personalInfo.website.replace("http://", "")}
                </a>
              </p>
            </Section>

            <Section title="Skills">
              <ul className="list-disc list-inside ml-4 space-y-2">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </Section>

            <Section title="Tools">
              <ul className="list-disc list-inside ml-4 space-y-2">
                {tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </Section>

            <Section title="Technologies">
              <ul className="list-disc list-inside ml-4 space-y-2">
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
