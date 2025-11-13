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
    url: "https://uniconnect.example.com",
    images: ["https://res.cloudinary.com/dqweuq8ic/image/upload/v1762982929/herologo_yy16u5.png"]
  },
  metadataBase: new URL("https://uniconnect.example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <SessionProviderWrapper>
          <AdminProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <SeedData />
            <QuickHelpBar />
            <JerseyPromo />
            <UniBuddy />
          </AdminProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
