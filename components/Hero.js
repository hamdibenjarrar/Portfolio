"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight } from "react-feather";

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Greeting>Hello, I'm</Greeting>
          <Name>Hamdi Ben Jarrar</Name>
          <Title>Full Stack Developer!</Title>
          <Description>
            For me, development is not just about writing code—it’s about
            unlocking potential. Just as art is a verb, so is code. I don’t just
            build applications; I shape experiences that empower people, helping
            them see possibilities they never knew existed. Using React,
            Next.js, and Node.js, I transform abstract ideas into seamless,
            intuitive solutions that feel as good as they function. Technology
            should serve, inspire, and elevate—and that’s exactly what I create.
          </Description>

          <ButtonGroup>
            <PrimaryButton
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </PrimaryButton>
            <SecondaryButton
              href="https://cal.com/hamdibenjarrar/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </SecondaryButton>

          </ButtonGroup>
        </motion.div>
      </HeroContent>

      <HeroImageContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <HeroImage>
          <ProfileImage src="/img.png?height=400&width=400" alt="Profile" />
        </HeroImage>
      </HeroImageContainer>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 2rem 0 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 4rem 0 6rem;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    flex: 1;
    text-align: left;
  }
`;

const Greeting = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #3e3734;
  margin-bottom: 0.5rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(20deg, #daa797, #d35040);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 600px;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(20deg, #daa797, #d35040);
  color: white;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 8px 5px 20px 4px rgb(0 0 0 / 42%);
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #d35040;
  border: 2px solid #d35040;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
`;

const HeroImageContainer = styled(motion.div)`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex: 1;
    margin-bottom: 0;
  }
`;

const HeroImage = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  margin: 0 auto;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 8px 5px 20px 4px rgb(0 0 0 / 42%);
`;
