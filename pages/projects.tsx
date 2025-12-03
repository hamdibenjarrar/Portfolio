import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaExternalLinkAlt } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectVersion {
  name: string;
  link: string;
  image: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  video?: string;
  featured: boolean;
  versions?: ProjectVersion[];
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeVersions, setActiveVersions] = useState<{[key: number]: number}>({});

  const toggleVersion = (projectId: number, versionIndex: number) => {
    setActiveVersions(prev => ({
      ...prev,
      [projectId]: versionIndex
    }));
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.set(cards, { opacity: 1, y: 0 }); // Ensure cards are visible by default
        
        gsap.fromTo(cards,
          {
            y: 80,
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
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out"
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Wallah We Can - Digital Platform",
      category: "Social Impact & Web Development",
      description: "Leading the development of collaborative digital platforms, chatbots, and web tools for education and youth empowerment initiatives across Tunisia.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Chatbot Integration"],
      featured: true,
      versions: [
        {
          name: "V2 (New)",
          link: "https://v2-nine-pink.vercel.app/en",
          image: "/wwc2.png"
        },
        {
          name: "V1 (Legacy)",
          link: "https://wallahwecan.vercel.app/en",
          image: "/wwc.png"
        }
      ]
    },
    {
      id: 2,
      title: "Dinarwise",
      category: "Fintech Platform",
      description: "A comprehensive financial platform focused on digital currency solutions and services, providing seamless transaction experiences.",
      technologies: ["Next.js", "TypeScript", "Financial APIs", "Responsive Design"],
      link: "https://dinarwise.me/",
      image: "/d.png",
      featured: true
    },
    {
      id: 3,
      title: "Artist Portfolio",
      category: "Creative Portfolio Website",
      description: "An elegant, minimalist portfolio website designed for a visual artist to showcase their work. Features smooth animations, gallery layouts, and responsive design.",
      technologies: ["React", "Next.js", "Framer Motion", "CSS Grid", "Responsive Design"],
      link: "https://yassineradhouani.me/",
      image: "/art.png",
      featured: true
    },
    {
      id: 4,
      title: "Interactive 3D Sphere",
      category: "Creative Coding",
      description: "A mesmerizing 3D sphere animation built with pure JavaScript and Canvas, showcasing advanced animation techniques and mathematical visualization.",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Animation"],
      link: "https://codepen.io/Hamdi-Ben-Jarrar/full/XJrMwjp",
      video: "/sphere.mp4",
      featured: false
    }
  ];

  return (
    <Container ref={sectionRef}>
      <Head>
        <title>Hamdi Ben Jarrar | Projects - Digital Solutions</title>
        <meta name="description" content="Explore a portfolio of high-impact digital solutions, web applications, and creative coding experiments by Hamdi Ben Jarrar. Next.js, React, and Node.js expertise." />
        <meta property="og:title" content="Hamdi Ben Jarrar | Projects - Digital Solutions" />
        <meta property="og:description" content="Explore a portfolio of high-impact digital solutions, web applications, and creative coding experiments." />
      </Head>

      <Navbar />

      <Main>
        <HeroSection>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>PROJECTS</PageTitle>
            <PageSubtitle>Building Solutions That Matter</PageSubtitle>
          </motion.div>
        </HeroSection>

        <ProjectsSection>
          <ProjectsGrid>
            {projects.map((project) => {
              const activeVersionIndex = activeVersions[project.id] || 0;
              const currentVersion = project.versions ? project.versions[activeVersionIndex] : null;
              const displayImage = currentVersion ? currentVersion.image : (project.image || '/placeholder-project.jpg');
              const displayLink = currentVersion ? currentVersion.link : project.link;

              return (
                <ProjectCard 
                  key={project.id} 
                  className="project-card"
                  $featured={project.featured}
                >
                  <ProjectImageWrapper>
                    {project.video ? (
                      <ProjectVideo autoPlay loop muted playsInline>
                        <source src={project.video} type="video/mp4" />
                      </ProjectVideo>
                    ) : (
                      <ProjectImage src={displayImage} alt={project.title} />
                    )}
                    <ProjectOverlay>
                      <ProjectLink href={displayLink} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> VIEW PROJECT
                      </ProjectLink>
                    </ProjectOverlay>
                  </ProjectImageWrapper>

                  <ProjectContent>
                    <ProjectCategory>{project.category}</ProjectCategory>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                      {project.versions && (
                        <VersionSwitcher>
                          {project.versions.map((v, idx) => (
                            <VersionButton 
                              key={idx} 
                              $active={idx === activeVersionIndex}
                              onClick={() => toggleVersion(project.id, idx)}
                            >
                              {v.name}
                            </VersionButton>
                          ))}
                        </VersionSwitcher>
                      )}
                    </ProjectDescription>
                    
                    <TechStack>
                      {project.technologies.map((tech, idx) => (
                        <TechTag key={idx}>{tech}</TechTag>
                      ))}
                    </TechStack>
                  </ProjectContent>
                </ProjectCard>
              );
            })}
          </ProjectsGrid>
        </ProjectsSection>

        <CTASection>
          <CTAContent
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <CTATitle>Have a Project in Mind?</CTATitle>
            <CTAText>
              Let's collaborate to build something impactful together. I'm always open to discussing 
              new projects, creative ideas, or opportunities to be part of your vision.
            </CTAText>
            <CTAButton href="/contact">GET IN TOUCH</CTAButton>
          </CTAContent>
        </CTASection>
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
  width: 100%;
`;

const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem 4rem;
  background: var(--color-charcoal);

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 6rem 1.5rem 3rem;
  }
`;

const PageTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--color-cream);
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--color-red);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const ProjectsSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 768px) {
    gap: 5rem;
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: var(--color-charcoal);

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const ProjectCard = styled.div<{ $featured: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background: var(--color-white);
  border: 3px solid var(--color-black);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 1024px) {
    grid-template-columns: ${props => props.$featured ? '1.2fr 1fr' : '1fr 1fr'};
    
    &:nth-child(even) {
      grid-template-columns: ${props => props.$featured ? '1fr 1.2fr' : '1fr 1fr'};
      
      ${ProjectImageWrapper} {
        order: ${props => props.$featured ? 2 : 1};
      }
      ${ProjectContent} {
        order: ${props => props.$featured ? 1 : 2};
      }
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
    border-color: var(--color-red);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLink = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-cream);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  border: 2px solid var(--color-cream);
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-red);
    border-color: var(--color-red);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const ProjectCategory = styled.span`
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--color-red);
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--color-black);
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const ProjectDescription = styled.div`
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-gray);
  margin-bottom: 2rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechTag = styled.span`
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: var(--color-cream);
  color: var(--color-black);
  border: 1px solid var(--color-black);
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    background: var(--color-black);
    color: var(--color-cream);
  }
`;

const CTASection = styled.section`
  background: var(--color-black);
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const CTAContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: var(--color-cream);
  margin-bottom: 1.5rem;
`;

const CTAText = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.8;
  color: var(--color-cream-dark);
  margin-bottom: 3rem;
`;

const CTAButton = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 1.5rem 3rem;
  background: var(--color-red);
  color: var(--color-cream);
  border: 2px solid var(--color-red);
  cursor: pointer;
  transition: all 0.4s ease;
  text-transform: uppercase;
  display: inline-block;

  &:hover {
    background: transparent;
    color: var(--color-red);
  }
`;

const VersionSwitcher = styled.span`
  display: inline-flex;
  gap: 0.5rem;
  margin-left: 1rem;
  vertical-align: middle;
`;

const VersionButton = styled.button<{ $active: boolean }>`
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  background: ${props => props.$active ? 'var(--color-black)' : 'transparent'};
  color: ${props => props.$active ? 'var(--color-cream)' : 'var(--color-black)'};
  border: 1px solid var(--color-black);
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background: var(--color-black);
    color: var(--color-cream);
    transform: translateY(-1px);
  }
`;
