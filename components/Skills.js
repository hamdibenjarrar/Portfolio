"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React.js", "Next.js", "JavaScript", "TypeScript", "MUI", "Framer Motion"],
    },
    {
      category: "Backend & Databases",
      items: ["Node.js", "Express.js", "MongoDB",  "REST API"],
    },
    {
      category: "Tools & Workflow",
      items: ["Git", "GitHub", "VS Code", "Figma", "Power BI", "Responsive Design", "Performance Optimization"],
    },
    {
      category: "Leadership & People Management",
      items: [
        "Emotional Intelligence",
        "Talent Discovery & Development",
        "Team Motivation & Growth",
        "Strategic Decision-Making",
        "Creative Direction",
      ],
    },
    {
      category: "Back Office & Operations",
      items: [
        "Customer Service",
        "Problem Resolution",
        "Workforce Coordination",
        "Back Office Management",
        "Operational Efficiency",
      ],
    },
  ];

  return (
    <SkillsContainer>
      {skills.map((skillGroup, index) => (
        <SkillCard
          key={skillGroup.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <SkillCategory>{skillGroup.category}</SkillCategory>
          <SkillList>
            {skillGroup.items.map((skill) => (
              <SkillItem key={skill}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCard>
      ))}
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }
`;

const SkillCategory = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #111827;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(20deg, #daa797, #d35040);
    border-radius: 2px;
  }
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
`;

const SkillItem = styled.li`
  background: #EEF2FF;
  color: #D35040;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
`;
