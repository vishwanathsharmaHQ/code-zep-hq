"use server";

import * as zod from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/app/lib/db";
import { RegisterSchema } from "@/components/schemas/schemas";
import { getUserByEmail } from "@/utils/server/utility-functions";

export const register = async (values: zod.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { name, password, email } = validatedFields.data;

  const hashedPass = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "Email already in use!",
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPass,
    },
  });

  return {
    success: "User created!",
  };
};
