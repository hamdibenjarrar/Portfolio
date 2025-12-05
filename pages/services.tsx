import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <Container>
      <Head>
        <title>Services | Hamdi Ben Jarrar</title>
        <meta name="description" content="Strategic consulting, digital ecosystem building, AI integration, and leadership development. A hybrid approach to solving complex problems." />
      </Head>

      <Navbar />

      <Main>
        <HeroSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>SERVICES</PageTitle>
            <PageSubtitle>Hybrid Solutions for a Complex World</PageSubtitle>
          </motion.div>
        </HeroSection>

        <ContentSection>
          <ServiceBlock>
            <ServiceNumber>01</ServiceNumber>
            <ServiceContent>
              <ServiceTitle>Digital Ecosystem Building</ServiceTitle>
              <ServiceText>
                I don't just build websites; I construct digital ecosystems. By fusing <strong>Full-Stack Development</strong> (Next.js, Node.js) with <strong>System Thinking</strong>, I create scalable, resilient platforms that serve a purpose. From NGO management systems to immersive brand portfolios, every line of code is written with the future in mind.
              </ServiceText>
              <ServiceTags>
                <span>Web Architecture</span>
                <span>UX/UI Design</span>
                <span>Scalable Systems</span>
              </ServiceTags>
            </ServiceContent>
          </ServiceBlock>

          <ServiceBlock>
            <ServiceNumber>02</ServiceNumber>
            <ServiceContent>
              <ServiceTitle>Strategic Consulting & Leadership</ServiceTitle>
              <ServiceText>
                Technology without direction is noise. I offer strategic guidance to organizations and founders, helping them bridge the gap between <strong>Vision</strong> and <strong>Execution</strong>. My approach combines Stoic philosophy with modern agile methodologies to foster autonomy, clarity, and high-impact results.
              </ServiceText>
              <ServiceTags>
                <span>Digital Transformation</span>
                <span>Team Autonomy</span>
                <span>Vision Alignment</span>
              </ServiceTags>
            </ServiceContent>
          </ServiceBlock>

          <ServiceBlock>
            <ServiceNumber>03</ServiceNumber>
            <ServiceContent>
              <ServiceTitle>AI Integration & Future Systems</ServiceTitle>
              <ServiceText>
                The future belongs to those who collaborate with intelligence. I design and implement <strong>AI-driven workflows</strong> and <strong>Agentic Systems</strong> (like the AI Council) that augment human capability rather than replacing it. We move beyond simple automation into the realm of intelligent decision support.
              </ServiceText>
              <ServiceTags>
                <span>AI Agents</span>
                <span>Workflow Automation</span>
                <span>Human-AI Hybrid Systems</span>
              </ServiceTags>
            </ServiceContent>
          </ServiceBlock>

          <ServiceBlock>
            <ServiceNumber>04</ServiceNumber>
            <ServiceContent>
              <ServiceTitle>Human Elevation & Communication</ServiceTitle>
              <ServiceText>
                The root of every technical failure is a human failure. I teach <strong>Radical Clarity</strong> in communication and <strong>Self-Leadership</strong>. Through workshops and mentorship, I help individuals and teams unlock their potential, moving from passive execution to active ownership.
              </ServiceText>
              <ServiceTags>
                <span>Public Speaking</span>
                <span>Mentorship</span>
                <span>Stoic Leadership</span>
              </ServiceTags>
            </ServiceContent>
          </ServiceBlock>
        </ContentSection>
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
`;

const HeroSection = styled.section`
  padding: 8rem 2rem 4rem;
  background: var(--color-charcoal);
  color: var(--color-cream);
  text-align: center;
`;

const PageTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--color-red);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
`;

const ServiceBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 6rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding-bottom: 4rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: 100px 1fr;
    gap: 4rem;
  }
`;

const ServiceNumber = styled.span`
  font-family: var(--font-display);
  font-size: 4rem;
  color: var(--color-red);
  opacity: 0.5;
  line-height: 1;
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ServiceTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--color-black);
`;

const ServiceText = styled.p`
  font-family: var(--font-body);
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--color-gray);
  max-width: 800px;

  strong {
    color: var(--color-black);
    font-weight: 600;
  }
`;

const ServiceTags = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;

  span {
    font-family: var(--font-body);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-black);
    border-radius: 50px;
  }
`;
