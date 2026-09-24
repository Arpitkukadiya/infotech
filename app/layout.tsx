import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieConsent from "@/components/CookieConsent";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import LiveVisitorBadge from "@/components/LiveVisitorBadge";
import ReferralBanner from "@/components/ReferralBanner";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { BUSINESS } from "@/lib/data";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} – CCTV, DVR, Laptop & Gadget Experts`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Professional CCTV installation, DVR setup, laptop & phone repair, and IT services. Trusted by 1000+ customers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="relative">
        <AnimatedBackground />
        <ParticleBackground />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="pt-20 relative z-10">{children}</main>
        <Footer />
        <FloatingButtons />
        <LiveVisitorBadge />
        <ReferralBanner />
        <CookieConsent />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "rgba(15, 23, 42, 0.95)",
              color: "#fff",
              border: "1px solid rgba(6, 182, 212, 0.3)",
              backdropFilter: "blur(10px)",
            },
          }}
        />
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        <Analytics />
        <SpeedInsights / >
      </body>
    </html>
  );
}
