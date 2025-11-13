import "./globals.css";
import type { Metadata } from "next";
import { AdminProvider } from "@/context/AdminContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SeedData from "@/components/SeedData";
import QuickHelpBar from "@/components/layout/QuickHelpBar";
import JerseyPromo from "@/components/layout/JerseyPromo";
import SessionProviderWrapper from "@/components/auth/SessionProviderWrapper";
import UniBuddy from "@/components/layout/UniBuddy";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: {
    default: "Uni-Connect | Malaysian Student Consultancy",
    template: "%s | Uni-Connect"
  },
  description: "Study abroad made simple. Guidance, visas, scholarships, accommodation, and more.",
  openGraph: {
    title: "Uni-Connect",
    description: "Study abroad made simple.",
    type: "website",
    url: "https://uniconnect.example.com"
  },
  metadataBase: new URL("https://uniconnect.example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <SessionProviderWrapper>
          <AdminProvider>
            <ThemeProvider>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <SeedData />
              <QuickHelpBar />
              <JerseyPromo />
              <UniBuddy />
            </ThemeProvider>
          </AdminProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
