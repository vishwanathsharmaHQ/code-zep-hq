"use server";

import { db } from "@/app/lib/db";
import { AllProjectsProps, ProjectType } from "@/types/util.types";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: number) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    return null;
  }
};

export const getProjectsByStatus = async (status: string) => {
  try {
    const projects = await db.project.findMany({
      where: { status: status },
      include: {
        caseStudy: true, // Include the related case study
      },
    });
    return projects;
  } catch (error) {
    return null;
  }
};

export const getHomeProjects = async () => {
  try {
    const projects = await db.project.findMany({
      where: { homeProject: true },
      include: {
        caseStudy: true, // Include the related case study
      },
    });

    return projects;
  } catch (error) {
    return null;
  }
};

export const getAllProjects = async () => {
  try {
    const projects = await db.project.findMany({
      include: {
        caseStudy: true, // Include the related case study
      },
    });

    console.log(projects);
    return projects;
  } catch (error) {
    return null;
  }
};

enum NatureType {
  Work,
  Play,
  Featured,
}

export const getProjectsByNature = async (
  projectNature: NatureType | any
): Promise<any> => {
  try {
    const projects = await db.project.findMany({
      where: {
        projectNature: projectNature,
      },
      include: {
        caseStudy: true, // Include the related case study
      },
    });

    if (projects.length === 0) {
      return { message: "No projects found with the specified nature." };
    }

    return projects;
  } catch (error) {
    console.error("Error fetching projects by nature:", error);
    return { error: "An error occurred while fetching the projects." };
  }
};

export const getProjectBySlug = async (slug: string): Promise<any> => {
  try {
    const project = await db.project.findFirstOrThrow({
      where: {
        slug: slug,
      },
      include: {
        caseStudy: true, // Include the related case study
      },
    });

    if (!project) {
      return { message: "No project found with the specified nature." };
    }

    return project;
  } catch (error) {
    console.error("Error fetching project by nature:", error);
    return { error: "An error occurred while fetching the project." };
  }
};

export const getActiveProjects = async (): Promise<any> => {
  try {
    const projects = await db.project.findMany({
      where: {
        isActive: true,
      },
      include: {
        caseStudy: true, // Include the related case study
      },
    });

    if (projects.length === 0) {
      return { message: "No projects found with the specified nature." };
    }

    return projects;
  } catch (error) {
    console.error("Error fetching projects by nature:", error);
    return { error: "An error occurred while fetching the projects." };
  }
};

export const getCaseStudy = async (caseStudyId: number): Promise<any> => {
  try {
    const caseStudy = await db.caseStudy.findFirstOrThrow({
      where: {
        id: caseStudyId,
      },
    });

    if (!caseStudy) {
      return { message: "No caseStudy found with the specified id." };
    }

    return caseStudy;
  } catch (error) {
    console.error("Error fetching caseStudy by id:", error);
    return { error: "An error occurred while fetching the caseStudy." };
  }
};

export const getAllProjectsWithoutCaseStudies = async (): Promise<any> => {
  try {
    const projects = await db.project.findMany({
      where: {
        caseStudy: null, // Filter projects that do not have associated case studies
      },
    });

    if (projects.length === 0) {
      return { message: "No projects found without case studies." };
    }

    return projects;
  } catch (error) {
    console.error("Error fetching projects without case studies:", error);
    return { error: "An error occurred while fetching the projects." };
  }
};
