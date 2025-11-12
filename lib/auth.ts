import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: { email: { label: "Email" }, password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        const email = credentials?.email?.toString() ?? "";
        const password = credentials?.password?.toString() ?? "";
        const ok = email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD;
        if (!ok) return null;
        return { id: "admin-1", name: "Admin", email, role: "admin" as const } as any;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role ?? token.role;
      return token;
    },
    async session({ session, token }) {
      (session.user as any) = { ...(session.user ?? {}), role: (token as any).role };
      return session;
    },
  },
};
