import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Playfair_Display, Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import Loader from "../components/Loader";
import CustomCursor from "../components/CustomCursor";
import PageTransition from "../components/PageTransition";
import "../styles/globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
});

const theme = {
  colors: {
    cream: "#F5F1E8",
    black: "#0A0A0A",
    red: "#C1272D",
    charcoal: "#1A1A1A",
    accent: "#D4AF37",
  },
  fonts: {
    display: "'Playfair Display', serif",
    body: "'Space Grotesk', sans-serif",
    accent: "'Cormorant Garamond', serif",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle route changes
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setTimeout(() => setLoading(false), 800);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className={`${playfair.variable} ${spaceGrotesk.variable} ${cormorant.variable}`}>
      <ThemeProvider theme={theme}>
        {loading && <Loader />}
        <CustomCursor />
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={router.asPath}>
            <Component {...pageProps} />
          </PageTransition>
        </AnimatePresence>
        <SpeedInsights />
        <Analytics />
      </ThemeProvider>
    </div>
  );
}
