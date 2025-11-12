import PageTransition from "@/components/layout/PageTransition";
import LoginForm from "./LoginForm";

export const metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <PageTransition>
      <section className="container-px max-w-md mx-auto py-10">
        <h1 className="text-2xl font-semibold">Admin Login</h1>
        <LoginForm />
      </section>
    </PageTransition>
  );
}
