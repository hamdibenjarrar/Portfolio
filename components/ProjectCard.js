"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { ExternalLink } from "react-feather";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <VideoContainer>
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: hovered ? "blur(3px)" : "none",
            transition: "filter 0.3s ease",
          }}
        />
      </VideoContainer>

      {hovered && (
        <Overlay>
          <ProjectButton
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
            <span>View Project</span>
          </ProjectButton>
        </Overlay>
      )}

      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
      </Content>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: white;
  color: #D35040;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #D35040;
    color: white;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #6B7280;
`;
