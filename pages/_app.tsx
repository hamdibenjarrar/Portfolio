import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Playfair_Display, Space_Grotesk, Cormorant_Garamond, Syne, Six_Caps, Italiana, DM_Mono, Oswald, Anton, Abril_Fatface, Righteous, Unbounded, Rock_Salt, Prata, Bodoni_Moda, Cinzel, Major_Mono_Display, Monoton, Bebas_Neue } from "next/font/google";
import Head from "next/head";
import Loader from "../components/Loader";
import CustomCursor from "../components/CustomCursor";
import PageTransition from "../components/PageTransition";
import "../styles/globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-display", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "500", "700"], variable: "--font-body", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-accent", display: "swap" });
const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"], variable: "--font-bold", display: "swap" });
const sixCaps = Six_Caps({ subsets: ["latin"], weight: ["400"], variable: "--font-condensed", display: "swap" });
const italiana = Italiana({ subsets: ["latin"], weight: ["400"], variable: "--font-elegant", display: "swap" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-oswald", display: "swap" });
const anton = Anton({ subsets: ["latin"], weight: ["400"], variable: "--font-anton", display: "swap" });
const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"], variable: "--font-abril", display: "swap" });
const righteous = Righteous({ subsets: ["latin"], weight: ["400"], variable: "--font-righteous", display: "swap" });
const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-unbounded", display: "swap" });
const rockSalt = Rock_Salt({ subsets: ["latin"], weight: ["400"], variable: "--font-rock", display: "swap" });
const prata = Prata({ subsets: ["latin"], weight: ["400"], variable: "--font-prata", display: "swap" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-bodoni", display: "swap" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-cinzel", display: "swap" });
const majorMono = Major_Mono_Display({ subsets: ["latin"], weight: ["400"], variable: "--font-major", display: "swap" });
const monoton = Monoton({ subsets: ["latin"], weight: ["400"], variable: "--font-monoton", display: "swap" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"], variable: "--font-bebas", display: "swap" });

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
    bold: "'Syne', sans-serif",
    condensed: "'Six Caps', sans-serif",
    elegant: "'Italiana', serif",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const canonicalUrl = `https://hamdibenjarrar.tech${router.asPath === '/' ? '' : router.asPath.split('?')[0]}`;

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Reduced initial page load time for mobile
    const timer = setTimeout(() => {
      setLoading(false);
    }, isMobile ? 1500 : 2500);

    return () => clearTimeout(timer);
  }, [isMobile]);

  useEffect(() => {
    // Handle route changes
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setTimeout(() => setLoading(false), isMobile ? 400 : 800);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router, isMobile]);

  return (
    <div className={`${playfair.variable} ${spaceGrotesk.variable} ${cormorant.variable} ${syne.variable} ${sixCaps.variable} ${italiana.variable} ${dmMono.variable} ${oswald.variable} ${anton.variable} ${abril.variable} ${righteous.variable} ${unbounded.variable} ${rockSalt.variable} ${prata.variable} ${bodoni.variable} ${cinzel.variable} ${majorMono.variable} ${monoton.variable} ${bebas.variable}`}>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <ThemeProvider theme={theme}>
        {loading && <Loader />}
        {!isMobile && <CustomCursor />}
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={router.asPath}>
            <Component {...pageProps} />
          </PageTransition>
        </AnimatePresence>
        {/* Defer analytics on mobile for better performance */}
        {!isMobile && <SpeedInsights />}
        {!isMobile && <Analytics />}
      </ThemeProvider>
    </div>
  );
}
