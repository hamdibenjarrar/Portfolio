import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Hamdi Ben Jarrar | Innovation & Impact Leader</title>
        <meta 
          name="description" 
          content="Full-Stack Developer & Digital Innovation Strategist with 5+ years of experience building impactful solutions for social change. Expert in Next.js, React, Node.js, and digital transformation projects across Europe and Africa. Specialized in education technology, NGO digital platforms, and scalable web applications." 
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />

      <Main>
        <Hero />
        <AboutPreview>
          <AboutContent>
            <AboutTitle>Bridging Technology and Social Impact</AboutTitle>
            <AboutText>
              With over 5 years of experience in full-stack development and digital innovation, 
              I specialize in creating technology solutions that drive meaningful change. My journey 
              spans across diverse sectors including education technology, non-profit digital platforms, 
              and enterprise web applications across Europe and Africa.
            </AboutText>
            <AboutText>
              As a Full-Stack Developer, I leverage modern frameworks like Next.js, React, and Node.js 
              to build scalable, user-centric applications. My expertise extends beyond code to encompass 
              strategic digital transformation, project management, and team leadership. I've successfully 
              led initiatives that improved organizational efficiency, enhanced user engagement, and 
              empowered communities through technology.
            </AboutText>
            <AboutText>
              My approach combines technical excellence with design thinking and data-driven decision making. 
              Whether developing educational platforms that reach thousands of students, building NGO 
              management systems, or creating interactive web experiences, I focus on solutions that 
              are both innovative and impactful. I'm passionate about using technology as a force for 
              positive change, particularly in education, social entrepreneurship, and community development.
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
  color: var(--color-red);
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
  color: var(--color-cream-dark);
  max-width: 900px;

  &:last-child {
    margin-bottom: 0;
  }
`;
