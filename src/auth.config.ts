import bcrypt from "bcryptjs";
import type { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "./components/schemas/schemas";
import { getUserByEmail } from "./utils/server/utility-functions";

interface CustomUser extends User {
  id: string; // Ensure id is a string
  name: string | null;
  email: string | null;
  password: string | null;
  emailVerified: Date | null;
  image: string | null;
}

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email);

        if (!user || !user.password) return null;

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (passwordsMatch) {
          // Ensure the returned object has a string id
          const customUser: CustomUser = {
            id: user.id.toString(), // Convert id to string
            name: user.name,
            email: user.email,
            password: user.password,
            emailVerified: user.emailVerified,
            image: user.image,
          };
          return customUser;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
