"use server";

import * as zod from "zod";
import { db } from "@/app/lib/db";
import { ContactSchema } from "@/components/schemas/schemas";

export const getInTouch = async (values: zod.infer<typeof ContactSchema>) => {
  const validatedFields = ContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { name, query, email } = validatedFields.data;

  await db.clientQuery.create({
    data: {
      name,
      email,
      query,
    },
  });

  return {
    success: "I'll get back to you shortly!",
  };
};
