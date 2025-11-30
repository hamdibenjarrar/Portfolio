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
          content="Full-Stack Developer & Digital Innovation Strategist with 2+ years of intensive experience building transformative solutions for social change. Expert in Next.js, React, Node.js, and digital transformation projects across Europe and Africa. Specialized in education technology, NGO digital platforms, and scalable web applications that create lasting impact." 
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />

      <Main>
        <Hero />
        <AboutPreview>
          <AboutContent>
            <AboutTitle>Crafting Digital Solutions That Transform Lives</AboutTitle>
            <AboutText>
              With 2+ years of intensive full-stack development and digital innovation experience, 
              I've dedicated my career to building technology that creates real, measurable impact. 
              My journey has been marked by rapid growth, relentless learning, and an unwavering 
              commitment to excellence. From education platforms that empower thousands of learners 
              to NGO management systems that streamline social impact initiatives, every project 
              I undertake is driven by a singular mission: to leverage technology as a catalyst for positive change.
            </AboutText>
            <AboutText>
              As a Full-Stack Developer, I've mastered modern frameworks including Next.js, React, and Node.js, 
              architecting scalable, performant applications that deliver exceptional user experiences. 
              My expertise transcends mere code—I bring strategic digital transformation thinking, 
              innovative problem-solving, and leadership capabilities that drive projects from concept 
              to deployment. I've successfully spearheaded initiatives across Europe and Africa, 
              improving organizational efficiency, amplifying user engagement, and empowering communities 
              through thoughtfully designed digital solutions.
            </AboutText>
            <AboutText>
              My approach fuses technical mastery with design thinking, data-driven insights, and a 
              deep understanding of user needs. Whether developing educational platforms that democratize 
              learning, building robust NGO management ecosystems, or crafting immersive interactive web 
              experiences, I obsess over every detail to ensure solutions are not just functional—they're 
              transformative. I'm passionate about harnessing the power of technology to drive social 
              entrepreneurship, revolutionize education, and build stronger, more connected communities. 
              Together, let's build something legendary.
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
  color: #D5D0C3;
  max-width: 900px;

  &:last-child {
    margin-bottom: 0;
  }
`;
