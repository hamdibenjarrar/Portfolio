import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IdentityMarquee from "../components/IdentityMarquee";
import Footer from "../components/Footer";

// Lazy load Skills component since it's below the fold
const Skills = dynamic(() => import("../components/Skills"), {
  ssr: true,
  loading: () => null
});

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Hamdi Ben Jarrar | Innovation & Impact Leader</title>
        <meta 
          name="description" 
          content="Full-Stack Developer & Digital Innovation Strategist with 2+ years of intensive experience building transformative solutions for social change. Expert in Next.js, React, Node.js, and digital transformation projects across Europe and Africa. Specialized in education technology, NGO digital platforms, and scalable web applications that create lasting impact." 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hamdi Ben Jarrar | Innovation & Impact Leader" />
        <meta property="og:description" content="Full-Stack Developer & Digital Innovation Strategist building transformative solutions for social change." />
        <link rel="icon" href="/logo.webp" />
      </Head>

      <Navbar />

      <Main>
        <Hero />
        <IdentityMarquee />
        <AboutPreview>
          <AboutContent>
            <AboutTitle>The Intersection of Technology, Strategy, and Human Potential</AboutTitle>
            <AboutText>
              I am not just a developer. I am an architect of digital ecosystems. My work exists at the convergence of <strong>Full-Stack Engineering</strong>, <strong>Strategic Leadership</strong>, and <strong>Stoic Philosophy</strong>. In a world drowning in noise, I build clarity.
            </AboutText>
            <AboutText>
              My mission is twofold. First, to build premium, scalable digital solutions that solve complex problems for organizations. Second, to ignite a movement of <strong>autonomy and innovation</strong> within the next generation of Tunisian thinkers. I believe that technology is not the end goal; it is the lever we use to elevate human potential.
            </AboutText>
            <AboutText>
              From architecting robust NGO platforms to designing immersive brand experiences, I bring a relentless focus on quality and purpose. I don't just write code; I craft systems that empower, educate, and endure. Whether you are a founder looking for a technical partner or a visionary seeking a digital strategist, I am here to help you build something legendary.
            </AboutText>
          </AboutContent>
        </AboutPreview>
        <SkillsWrapper>
          <Skills />
        </SkillsWrapper>
      </Main>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-cream);
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SkillsWrapper = styled.div`
  width: 100%;
  background: var(--color-cream);
`;

const AboutPreview = styled.section`
  padding: 8rem 2rem;
  background: var(--color-charcoal);
  color: var(--color-cream);

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 3rem;
  color: #E84855;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const AboutText = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #D5D0C3;
  max-width: 900px;

  &:last-child {
    margin-bottom: 0;
  }
`;
