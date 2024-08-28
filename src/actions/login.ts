"use server";
import { signIn } from "@/auth";
import { LoginSchema } from "@/components/schemas/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import * as zod from "zod";
import { AuthError } from "next-auth";
interface LoginResponse {
  error?: string;
  success?: string;
}
export const login = async (
  values: zod.infer<typeof LoginSchema>
): Promise<LoginResponse> => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Login successful" }; // Return success message if login is successful
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid Credentials",
          };
        default:
          return {
            error: "Something went wrong!",
          };
      }
    }

    throw error;
  }
};
