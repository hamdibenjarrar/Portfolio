"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiMongodb, 
  SiTypescript,
  SiJavascript,
  SiFigma,
  SiGit,
  SiExpress,
  SiFramer,
  SiStyledcomponents,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPostman,
  SiGithub,
  SiVercel,
  SiNpm
} from "react-icons/si";
import { 
  HiPresentationChartLine,
  HiUserGroup, 
  HiLightBulb,
  HiChatBubbleLeftRight,
  HiRocketLaunch,
  HiPuzzlePiece,
  HiChartBar,
  HiAcademicCap,
  HiSparkles,
  HiCog,
  HiCodeBracketSquare
} from "react-icons/hi2";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillItem {
  icon: JSX.Element;
  name: string;
  category: string;
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const icons = sectionRef.current?.querySelectorAll(".skill-icon");
      if (icons) {
        gsap.set(icons, { opacity: 1, y: 0 });
        
        gsap.fromTo(icons, 
          {
            y: 50,
            opacity: 0
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center+=200",
              toggleActions: "play none none reverse",
            },
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.6,
            ease: "power3.out"
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const frontendSkills: SkillItem[] = [
    { icon: <SiReact />, name: "React", category: "frontend" },
    { icon: <SiNextdotjs />, name: "Next.js", category: "frontend" },
    { icon: <SiTypescript />, name: "TypeScript", category: "frontend" },
    { icon: <SiJavascript />, name: "JavaScript", category: "frontend" },
    { icon: <SiHtml5 />, name: "HTML5", category: "frontend" },
    { icon: <SiCss3 />, name: "CSS3", category: "frontend" },
    { icon: <SiTailwindcss />, name: "Tailwind", category: "frontend" },
    { icon: <SiStyledcomponents />, name: "Styled Comp.", category: "frontend" },
    { icon: <SiFramer />, name: "Framer Motion", category: "frontend" },
  ];

  const backendSkills: SkillItem[] = [
    { icon: <SiNodedotjs />, name: "Node.js", category: "backend" },
    { icon: <SiExpress />, name: "Express", category: "backend" },
    { icon: <SiMongodb />, name: "MongoDB", category: "backend" },
  ];

  const toolsSkills: SkillItem[] = [
    { icon: <SiFigma />, name: "Figma", category: "tools" },
    { icon: <SiGit />, name: "Git", category: "tools" },
    { icon: <SiGithub />, name: "GitHub", category: "tools" },
    { icon: <HiCodeBracketSquare />, name: "VS Code", category: "tools" },
    { icon: <SiPostman />, name: "Postman", category: "tools" },
    { icon: <SiVercel />, name: "Vercel", category: "tools" },
    { icon: <SiNpm />, name: "NPM", category: "tools" },
    { icon: <HiPresentationChartLine />, name: "Power BI", category: "tools" },
  ];

  const softSkills: SkillItem[] = [
    { icon: <HiUserGroup />, name: "Team Leadership", category: "soft" },
    { icon: <HiLightBulb />, name: "Innovation", category: "soft" },
    { icon: <HiChatBubbleLeftRight />, name: "Communication", category: "soft" },
    { icon: <HiRocketLaunch />, name: "Project Mgmt", category: "soft" },
    { icon: <HiPuzzlePiece />, name: "Problem Solving", category: "soft" },
    { icon: <HiChartBar />, name: "Strategic Planning", category: "soft" },
    { icon: <HiAcademicCap />, name: "Coaching", category: "soft" },
    { icon: <HiSparkles />, name: "Creativity", category: "soft" },
    { icon: <HiCog />, name: "Process Optim.", category: "soft" },
  ];

  return (
    <SkillsSection ref={sectionRef}>
      <SectionHeader>
        <SectionTitle as="h2">EXPERTISE</SectionTitle>
        <SectionSubtitle>Building Impact Through Technology & Leadership</SectionSubtitle>
      </SectionHeader>

      <SkillsContainer>
        <SkillCategory>
          <CategoryTitle>Frontend Development</CategoryTitle>
          <SkillsGrid>
            {frontendSkills.map((skill, index) => (
              <SkillIcon 
                key={index} 
                className="skill-icon"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon}
                <SkillName>{skill.name}</SkillName>
              </SkillIcon>
            ))}
          </SkillsGrid>
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>Backend & Database</CategoryTitle>
          <SkillsGrid>
            {backendSkills.map((skill, index) => (
              <SkillIcon 
                key={index} 
                className="skill-icon"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon}
                <SkillName>{skill.name}</SkillName>
              </SkillIcon>
            ))}
          </SkillsGrid>
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>Tools & Technologies</CategoryTitle>
          <SkillsGrid>
            {toolsSkills.map((skill, index) => (
              <SkillIcon 
                key={index} 
                className="skill-icon"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon}
                <SkillName>{skill.name}</SkillName>
              </SkillIcon>
            ))}
          </SkillsGrid>
        </SkillCategory>

        <SkillCategory>
          <CategoryTitle>Professional Skills</CategoryTitle>
          <SkillsGrid>
            {softSkills.map((skill, index) => (
              <SkillIcon 
                key={index} 
                className="skill-icon"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon}
                <SkillName>{skill.name}</SkillName>
              </SkillIcon>
            ))}
          </SkillsGrid>
        </SkillCategory>
      </SkillsContainer>
    </SkillsSection>
  );
}

const SkillsSection = styled.section`
  padding: 8rem 2rem;
  background: var(--color-cream);

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--color-black);
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--color-gray);
  letter-spacing: 0.05em;
`;

const SkillsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SkillCategory = styled.div`
  margin-bottom: 5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const CategoryTitle = styled.h3`
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--color-black);
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--color-red);
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const SkillIcon = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    font-size: 4rem;
    color: var(--color-black);
    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      color: var(--color-red);
    }
  }

  @media (max-width: 768px) {
    svg {
      font-size: 3rem;
    }
  }
`;

const SkillName = styled.span`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-gray);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
  max-width: 100px;

  ${SkillIcon}:hover & {
    color: var(--color-red);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
