"use server";

import { db } from "@/app/lib/db";
import { ProjectSchema } from "@/components/schemas/schemas";
import * as zod from "zod";
import { v4 as uuidv4 } from "uuid";

export const createProject = async (
  values: zod.infer<typeof ProjectSchema>
) => {
  const validatedFields = ProjectSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const {
    title,
    description,
    url,
    repoUrl,
    coverImage,
    technologies,
    category,
    services,
    client,
    clientId,
    status,
    imageGallery,
    startDate,
    endDate,
    budget,
    estimatedHours,
    internalNotes,
    clientFeedback,
    content,
  } = validatedFields.data;

  const projectUniqueId = uuidv4();

  await db.project.create({
    data: {
      title,
      description,
      url,
      repoUrl,
      coverImage,
      technologies,
      category,
      services,
      client,
      clientId,
      status,
      imageGallery,
      startDate,
      endDate,
      budget,
      estimatedHours,
      internalNotes,
      clientFeedback,
      content,
      projectUniqueId,
    },
  });

  return {
    success: "Project created!",
  };
};
