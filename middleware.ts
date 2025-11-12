import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/login" },
  callbacks: {
    authorized: ({ token, req }) => {
      const p = req.nextUrl.pathname;
      const needsAdmin = p.startsWith("/admin") || p.startsWith("/api/upload");
      if (needsAdmin) return token?.role === "admin";
      return true;
    },
  },
});

export const config = {
  matcher: ["/admin/:path*", "/api/upload"],
};
