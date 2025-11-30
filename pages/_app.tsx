import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Loader from "../components/Loader";
import CustomCursor from "../components/CustomCursor";
import PageTransition from "../components/PageTransition";
import "../styles/globals.css";

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
    <ThemeProvider theme={theme}>
      {loading && <Loader />}
      <CustomCursor />
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={router.asPath}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
      <SpeedInsights />
    </ThemeProvider>
  );
}
