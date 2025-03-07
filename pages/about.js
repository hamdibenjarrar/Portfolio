"use client";

import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

export default function About() {
  return (
    <Container>
      <Head>
        <title>Portfolio | About</title>
        <meta
          name="description"
          content="Learn more about me and my experience"
        />
      </Head>

      <Navbar />

      <Main>
        <AboutSection>
          <ProfileContainer
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProfileImageWrapper>
              <Image
                src="/img.png"
                alt="Profile"
                width={400}
                height={400}
                className="profile-image"
              />
            </ProfileImageWrapper>
          </ProfileContainer>

          <AboutContent
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1>About Me</h1>
            <p>
              Hello! I’m Hamdi — a Full-Stack Developer obsessed with building
              digital solutions that don’t just work, but inspire. My love for
              coding began at the intersection of art and logic: the thrill of
              turning abstract ideas into functional, beautiful tools.</p><p>While
              studying Computer Science, I realized that great software isn’t
              just about algorithms—it’s about empathy. It’s about understanding!
            </p>
            <p>
              How does a user feel when they interact with a button? How does a
              backend decision ripple into real-world impact? This mindset led
              me to create (Soon), a platform born from my belief that
              technology should empower people, not just serve them.
            </p>
            <p>
              Why work with me? I thrive when solving puzzles that
              matter, helping peaple launch MVP’s that investors can’t
              ignore. My sweet spot? Projects where elegance and ambition
              collide. Let’s build something that lasts. (Open to: Strategic
              collaborations)
            </p>
          </AboutContent>
        </AboutSection>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience
          </SectionTitle>
          <Timeline />
        </Section>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Education
          </SectionTitle>
          <EducationCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Bachelor of Science in Computer Science</h3>
            <h4>Montfleury High School</h4>
            <p>2013 - 2014</p>
            <p>
              Studied core computer science concepts including algorithms, data
              structures, software engineering principles, and web development.
            </p>
          </EducationCard>
        </Section>
      </Main>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
`;

const ProfileContainer = styled(motion.div)`
  flex-shrink: 0;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  .profile-image {
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const AboutContent = styled(motion.div)`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(20deg, #daa797, #d35040);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #4b5563;
  }
`;

const Section = styled.section`
  margin: 4rem 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(20deg, #daa797, #d35040);
    border-radius: 2px;
  }
`;

const EducationCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #D35040;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4b5563;
    line-height: 1.6;

    &:nth-child(3) {
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }
`;
