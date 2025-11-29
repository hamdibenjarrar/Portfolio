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
          content="Full-Stack Developer & Digital Innovation Strategist building impactful solutions for social change" 
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />

      <Main>
        <Hero />
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
