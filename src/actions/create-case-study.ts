"use server";

import { db } from "@/app/lib/db";
import { CaseStudySchema } from "@/components/schemas/schemas";
import * as zod from "zod";

export const createCaseStudy = async (
  values: zod.infer<typeof CaseStudySchema>
) => {
  const validatedFields = CaseStudySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { projectId, title, description, showreel, tagline, colorPalette } =
    validatedFields.data;

  await db.caseStudy.create({
    data: {
      projectId,
      title,
      description,
      showreel,
      tagline,
      colorPalette,
    },
  });

  return {
    success: "Case Study Created!",
  };
};
