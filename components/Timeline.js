"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export default function Timeline() {
  const experiences = [
    {
      id: 1,
      role: "Full-Stack Web Development (Training)",
      company: "Self-Learning & Courses",
      period: "10/2024 - 04/2025",
      location: "Tunisia",
      tasks: [
        "Mastering React, Next.js, and Node.js to build modern web applications.",
        "Developing real-world projects to improve frontend and backend skills.",
          "Enhancing UI/UX skills by creating responsive and user-friendly designs.",
        "Implementing best  codingpractices and version control using Git/GitHub.",
      ],
    },
    {
      id: 2,
      role: "Customer Service Representative (Phone, Chat, Email)",
      company: "Almaviva",
      period: "07/2022 - 08/2024",
      location: "Charguia 2",
      tasks: [
        "Addressed customer inquiries via phone, live chat, and email, providing prompt and accurate information.",
        "Delivered clear explanations and step-by-step guidance to assist customers in resolving issues effectively.",
        "Managed diverse customer interactions across multiple channels, ensuring a seamless and consistent service experience.",
        "Collaborated within a team environment to escalate complex issues and unresolved tickets to higher support levels for resolution.",
      ],
    },
    {
      id: 3,
      role: "Team Manager",
      company: "Néoconsilium France",
      period: "01/2021 - 11/2021",
      location: "Montplaisir",
      tasks: [
        "Acted as a mediator authorized by insurance companies, selling insurance services.",
        "Ensured the quality of team work, collaborated in recruitment, and managed daily team schedules.",
      ],
    },
    {
      id: 4,
      role: "Customer Advisor",
      company: "TCC",
      period: "10/2017 - 12/2017",
      location: "Laffayet",
      tasks: ["Scheduled appointments for Seat France."],
    },
    {
      id: 5,
      role: "Salesperson/Assistant",
      company: "Pull&Bear",
      period: "03/2016 - 05/2017",
      location: "",
      tasks: ["Completed an administrative assistant internship focusing on Reactive Planning."],
    },
  ];

  return (
    <TimelineContainer>
      {experiences.map((experience, index) => (
        <TimelineItem
          key={experience.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <TimelineDot />
          <TimelineContent>
            <Role>{experience.role}</Role>
            <Company>{experience.company}</Company>
            <Period>{experience.period} <span>{experience.location}</span></Period>
            <TaskTitle>Tasks</TaskTitle>
            <TaskList>
              {experience.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </TaskList>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
}

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 7px;
    width: 2px;
    background: #E5E7EB;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 0;
  left: -2rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(20deg, #daa797, #d35040);
  border: 3px solid white;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
`;

const TimelineContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const Role = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: #D35040;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #6B7280;
  margin-bottom: 1rem;

  span {
    font-style: italic;
    float: right;
  }
`;

const TaskTitle = styled.h5`
  font-weight: 600;
  font-size: 1rem;
  color: #6B7280;
  margin-bottom: 0.5rem;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding-left: 1rem;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #4B5563;

    &::before {
      content: "-";
      position: absolute;
      left: 0;
      color: #D35040;
      font-weight: bold;
    }
  }
`;
