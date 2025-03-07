"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedProjects() {
  return (
    <ProjectsContainer>
      <ProjectCard
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <ProjectImageWrapper>
          <Image
            src="/astronaut.webp"
            alt="Axiome - Stay Tuned"
            width={800}
            height={600}
            className="project-image"
          />
        </ProjectImageWrapper>

        <ProjectContent>
          <ProjectTitle>Axiome – Stay Tuned</ProjectTitle>
          <ProjectDescription>
            Something incredible is in the works! Axiome is coming soon to redefine digital experiences.
          </ProjectDescription>
        </ProjectContent>
      </ProjectCard>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;

  .project-image {
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111827;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #6B7280;
  margin-bottom: 1.5rem;
`;
