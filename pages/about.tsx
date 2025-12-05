import { useEffect, useRef } from "react";
import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiBuildingOffice2, HiRocketLaunch, HiUsers, HiLightBulb, HiAcademicCap, HiCodeBracket, HiUserGroup, HiShoppingBag, HiPresentationChartLine, HiChatBubbleLeftRight, HiPuzzlePiece, HiChartBar, HiSparkles, HiCog } from "react-icons/hi2";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript, SiJavascript, SiFigma, SiGit, SiExpress, SiFramer } from "react-icons/si";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  icon: typeof HiBuildingOffice2;
  color: string;
}

interface Highlight {
  icon: typeof HiLightBulb;
  title: string;
  description: string;
}

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      const cards = timelineRef.current?.querySelectorAll(".experience-card");
      if (cards) {
        gsap.set(cards, { opacity: 1, x: 0 }); // Ensure cards are visible by default
        
        gsap.fromTo(cards,
          {
            x: (index) => (index % 2 === 0 ? -80 : 80),
            opacity: 0
          },
          {
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top center+=200",
              toggleActions: "play none none reverse",
            },
            x: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out"
          }
        );
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Responsable Innovation & Impact Digital",
      company: "Wallah We Can Global",
      period: "Aug 2025 - Present",
      location: "Tunis, Tunisia",
      description: "Developing and implementing digital innovation strategies including websites, chatbots, and collaborative platforms. Designing and leading social impact projects that integrate technological, environmental, and organizational solutions.",
      highlights: [
        "Develop digital innovation strategies: websites, chatbots, collaborative platforms",
        "Conduct field audits and propose tailored digital solutions",
        "Oversee maintenance, reporting, and continuous improvement of digital tools",
        "Train internal teams and volunteers on new methodologies",
        "Represent organization at events, conferences, and local initiatives"
      ],
      icon: HiRocketLaunch,
      color: "var(--color-red)"
    },
    {
      id: 2,
      title: "Full-Stack Web Developer (Training) / Freelance",
      company: "GOMYCODE",
      period: "Nov 2024 - Apr 2025",
      location: "Tunis, Tunisia",
      description: "Completed intensive Software Developer Bootcamp mastering React, Next.js, and Node.js through structured courses and hands-on projects. Built real-world web applications while refining both frontend and backend skills.",
      highlights: [
        "Mastered React, Next.js, and Node.js through bootcamp training",
        "Built real-world web applications with modern frameworks",
        "Enhanced UI/UX design for responsive and user-friendly solutions",
        "Developed full-stack projects combining frontend and backend expertise"
      ],
      icon: HiAcademicCap,
      color: "var(--color-accent)"
    },
    {
      id: 3,
      title: "Customer Service Representative",
      company: "AlmavivA Tunisie",
      period: "Jul 2022 - Aug 2024",
      location: "Tunis, Tunisia",
      description: "Handled multi-channel customer inquiries with fast, accurate solutions. Guided technical troubleshooting and problem resolution while collaborating with teams to manage complex cases.",
      highlights: [
        "Managed multi-channel customer inquiries with efficient solutions",
        "Provided technical troubleshooting and problem resolution",
        "Collaborated with teams to resolve complex cases",
        "Improved customer satisfaction through effective communication"
      ],
      icon: HiBuildingOffice2,
      color: "var(--color-charcoal)"
    },
    {
      id: 4,
      title: "Call Center Supervisor",
      company: "Néoconsilium France",
      period: "Mar 2021 - Jan 2022",
      location: "Tunis, Tunisia",
      description: "Managed team performance, recruitment, and scheduling. Implemented performance tracking and KPI monitoring to optimize productivity.",
      highlights: [
        "Managed team performance and recruitment processes",
        "Implemented KPI monitoring and performance tracking",
        "Optimized team productivity and efficiency",
        "Coordinated scheduling and operational workflows"
      ],
      icon: HiUserGroup,
      color: "var(--color-red)"
    },
    {
      id: 5,
      title: "Manager",
      company: "LYOUM",
      period: "Oct 2019 - Feb 2020",
      location: "Tunisia",
      description: "Oversaw operations and team coordination for projects. Managed daily activities and ensured smooth operational workflows.",
      highlights: [
        "Oversaw daily operations and team coordination",
        "Managed project workflows and timelines",
        "Coordinated between departments for efficiency",
        "Ensured quality standards across operations"
      ],
      icon: HiBuildingOffice2,
      color: "var(--color-accent)"
    },
    {
      id: 6,
      title: "Sales Assistant",
      company: "Pull&Bear",
      period: "Mar 2016 - May 2017",
      location: "Tunisia",
      description: "Assisted in store operations, customer engagement, and administrative tasks. Provided excellent customer service and support.",
      highlights: [
        "Assisted in daily store operations",
        "Engaged customers with product knowledge",
        "Handled administrative tasks efficiently",
        "Maintained store presentation standards"
      ],
      icon: HiShoppingBag,
      color: "var(--color-charcoal)"
    }
  ];

  const coreStrengths: Highlight[] = [
    {
      icon: HiCodeBracket,
      title: "Technical Mastery",
      description: "Expert in Next.js, React, Node.js, TypeScript, and modern web architectures with a focus on performance and scalability."
    },
    {
      icon: HiLightBulb,
      title: "Innovation Mindset",
      description: "Constantly exploring cutting-edge technologies and methodologies to build solutions that push boundaries."
    },
    {
      icon: HiUsers,
      title: "Team Leadership",
      description: "Experienced in leading development teams, mentoring engineers, and fostering collaborative environments."
    },
    {
      icon: HiRocketLaunch,
      title: "Impact-Driven",
      description: "Committed to creating digital solutions that drive social change and empower communities."
    }
  ];

  return (
    <Container>
      <Head>
        <title>Hamdi Ben Jarrar | About - Innovation & Impact</title>
        <meta name="description" content="Discover Hamdi Ben Jarrar's journey in full-stack development, digital innovation, and social impact leadership. Transforming ideas into scalable solutions." />
        <meta property="og:title" content="Hamdi Ben Jarrar | About - Innovation & Impact" />
        <meta property="og:description" content="Discover Hamdi Ben Jarrar's journey in full-stack development, digital innovation, and social impact leadership." />
      </Head>

      <Navbar />

      <Main>
        <HeroSection>
          <HeroContent
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>ABOUT ME</PageTitle>
            <PageSubtitle>Architecting Digital Ecosystems & Human Potential</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <IntroSection>
          <IntroContent
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <IntroTitle>The Intersection of Strategy, Technology, and Stoicism</IntroTitle>
            <IntroText>
              I am an Architect of Digital Ecosystems. My work exists at the intersection of technology, strategy, and human potential. I do not just build software; I build systems that think, scale, and serve a higher purpose.
            </IntroText>
            <IntroText>
              My journey has never been linear. From leading high-stakes digital transformations to managing complex operational workflows, I have learned that true innovation is not about the code—it is about the clarity of the vision behind it. I combine the precision of a Full-Stack Engineer with the strategic depth of a Consultant and the discipline of a Stoic.
            </IntroText>
            <IntroText>
              I believe in "Tech with a Soul"—technology that amplifies human capability rather than replacing it. Whether I am designing a scalable SaaS architecture, optimizing a business process, or mentoring a team, my goal is always the same: to create order from chaos and to build digital assets that stand the test of time.
            </IntroText>
            <IntroText>
              This portfolio is not just a showcase of my code. It is a manifesto of my belief that the future belongs to those who can bridge the gap between the technical and the human. Welcome to my ecosystem.
            </IntroText>
          </IntroContent>
        </IntroSection>

        <StrengthsSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Core Strengths
          </SectionTitle>
          <StrengthsGrid>
            {coreStrengths.map((strength, index) => (
              <StrengthCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <IconWrapper>
                  <strength.icon size={40} />
                </IconWrapper>
                <StrengthTitle>{strength.title}</StrengthTitle>
                <StrengthDescription>{strength.description}</StrengthDescription>
              </StrengthCard>
            ))}
          </StrengthsGrid>
        </StrengthsSection>

        <TimelineSection ref={timelineRef}>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Professional Journey
          </SectionTitle>
          
          <Timeline>
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} className="experience-card" $color={exp.color}>
                <CardHeader>
                  <IconCircle $color={exp.color}>
                    <exp.icon size={32} />
                  </IconCircle>
                  <HeaderContent>
                    <Position>{exp.title}</Position>
                    <Company>{exp.company}</Company>
                    <Period>{exp.period} • {exp.location}</Period>
                  </HeaderContent>
                </CardHeader>

                <CardBody>
                  <Description>{exp.description}</Description>
                  <HighlightsList>
                    {exp.highlights.map((highlight, idx) => (
                      <HighlightItem key={idx}>{highlight}</HighlightItem>
                    ))}
                  </HighlightsList>
                </CardBody>
              </ExperienceCard>
            ))}
          </Timeline>
        </TimelineSection>

        <LanguagesSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Languages
          </SectionTitle>
          <LanguagesGrid>
            <LanguageCard
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <LanguageName>Arabic</LanguageName>
              <ProficiencyLevel>Native</ProficiencyLevel>
              <ProficiencyBar>
                <ProficiencyFill $width="100%" />
              </ProficiencyBar>
            </LanguageCard>

            <LanguageCard
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <LanguageName>French</LanguageName>
              <ProficiencyLevel>Conversational</ProficiencyLevel>
              <ProficiencyBar>
                <ProficiencyFill $width="75%" />
              </ProficiencyBar>
            </LanguageCard>

            <LanguageCard
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <LanguageName>English</LanguageName>
              <ProficiencyLevel>Conversational</ProficiencyLevel>
              <ProficiencyBar>
                <ProficiencyFill $width="75%" />
              </ProficiencyBar>
            </LanguageCard>

            <LanguageCard
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <LanguageName>German</LanguageName>
              <ProficiencyLevel>Intermediate</ProficiencyLevel>
              <ProficiencyBar>
                <ProficiencyFill $width="60%" />
              </ProficiencyBar>
            </LanguageCard>
          </LanguagesGrid>
        </LanguagesSection>

        <SkillsShowcaseSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Skills & Expertise
          </SectionTitle>
          
          <SkillsCategory>
            <CategoryTitle>Technical Skills</CategoryTitle>
            <SkillsIconGrid>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <SiReact size={48} />
                <SkillIconName>React</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <SiNextdotjs size={48} />
                <SkillIconName>Next.js</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <SiNodedotjs size={48} />
                <SkillIconName>Node.js</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <SiTypescript size={48} />
                <SkillIconName>TypeScript</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <SiJavascript size={48} />
                <SkillIconName>JavaScript</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <SiMongodb size={48} />
                <SkillIconName>MongoDB</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <SiExpress size={48} />
                <SkillIconName>Express</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <SiGit size={48} />
                <SkillIconName>Git</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <SiFigma size={48} />
                <SkillIconName>Figma</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <SiFramer size={48} />
                <SkillIconName>Framer</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <HiPresentationChartLine size={48} />
                <SkillIconName>Power BI</SkillIconName>
              </SkillIconItem>
            </SkillsIconGrid>
          </SkillsCategory>

          <SkillsCategory>
            <CategoryTitle>Professional Skills</CategoryTitle>
            <SkillsIconGrid>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <HiRocketLaunch size={48} />
                <SkillIconName>Project Mgmt</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <HiUserGroup size={48} />
                <SkillIconName>Leadership</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <HiChartBar size={48} />
                <SkillIconName>Strategy</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <HiPuzzlePiece size={48} />
                <SkillIconName>Problem Solving</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <HiChatBubbleLeftRight size={48} />
                <SkillIconName>Communication</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <HiLightBulb size={48} />
                <SkillIconName>Innovation</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <HiCog size={48} />
                <SkillIconName>Optimization</SkillIconName>
              </SkillIconItem>
              <SkillIconItem className="skill-icon" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                <HiAcademicCap size={48} />
                <SkillIconName>Coaching</SkillIconName>
              </SkillIconItem>
            </SkillsIconGrid>
          </SkillsCategory>
        </SkillsShowcaseSection>

        <CTASection>
          <CTAContent
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <CTATitle>Let's Build Something Amazing</CTATitle>
            <CTAText>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Let's create something impactful together.
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
  background: var(--color-black);
  position: relative;
  overflow: hidden;

  &::before {
    content: 'INNOVATE';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font-display);
    font-size: clamp(10rem, 20vw, 20rem);
    font-weight: 900;
    color: rgba(245, 241, 232, 0.03);
    white-space: nowrap;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 6rem 1.5rem 3rem;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
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

const IntroSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const IntroContent = styled(motion.div)`
  text-align: center;
`;

const IntroTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--color-black);
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const IntroText = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  line-height: 1.8;
  color: var(--color-gray);
  margin-bottom: 1.5rem;

  strong {
    color: var(--color-black);
    font-weight: 600;
  }
`;

const StrengthsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: var(--color-charcoal);

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: var(--color-cream);
  text-align: center;
  margin-bottom: 4rem;
  letter-spacing: -0.02em;
`;

const StrengthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StrengthCard = styled(motion.div)`
  background: var(--color-cream);
  border: 3px solid var(--color-black);
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s ease;

  &:hover {
    border-color: var(--color-red);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
  color: var(--color-cream);
  border-radius: 50%;
  transition: all 0.4s ease;

  ${StrengthCard}:hover & {
    background: var(--color-red);
    transform: rotate(10deg) scale(1.1);
  }
`;

const StrengthTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-black);
  margin-bottom: 1rem;
`;

const StrengthDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-gray);
`;

const TimelineSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ExperienceCard = styled.div<{ $color: string }>`
  background: var(--color-white);
  border: 3px solid var(--color-black);
  border-left: 8px solid ${props => props.$color};
  padding: 2.5rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateX(10px);
    box-shadow: -15px 15px 30px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.$color};
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: flex-start;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const IconCircle = styled.div<{ $color: string }>`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${props => props.$color};
  color: var(--color-cream);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  ${ExperienceCard}:hover & {
    transform: scale(1.15) rotate(10deg);
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const Position = styled.h3`
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--color-black);
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const Company = styled.h4`
  font-family: var(--font-body);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-red);
  margin-bottom: 0.5rem;
`;

const Period = styled.span`
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-gray);
  letter-spacing: 0.05em;
`;

const CardBody = styled.div``;

const Description = styled.p`
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-gray);
  margin-bottom: 1.5rem;
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const HighlightItem = styled.li`
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-gray);
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--color-red);
    font-weight: 700;
  }
`;

const CTASection = styled.section`
  background: var(--color-red);
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
  color: var(--color-cream);
  margin-bottom: 3rem;
  opacity: 0.95;
`;

const CTAButton = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 1.5rem 3rem;
  background: var(--color-cream);
  color: var(--color-red);
  border: 2px solid var(--color-cream);
  cursor: pointer;
  transition: all 0.4s ease;
  text-transform: uppercase;
  display: inline-block;

  &:hover {
    background: transparent;
    color: var(--color-cream);
  }
`;

const LanguagesSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 6rem 2rem;
  background: var(--color-cream);

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const LanguagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LanguageCard = styled(motion.div)`
  background: var(--color-white);
  border: 3px solid var(--color-black);
  padding: 2rem;
  text-align: center;
  transition: all 0.4s ease;

  &:hover {
    border-color: var(--color-red);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const LanguageName = styled.h3`
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-black);
  margin-bottom: 0.5rem;
`;

const ProficiencyLevel = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-gray);
  margin-bottom: 1.5rem;
`;

const ProficiencyBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--color-cream);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProficiencyFill = styled.div<{ $width: string }>`
  height: 100%;
  width: ${props => props.$width};
  background: var(--color-red);
  border-radius: 4px;
  transition: width 1s ease-out;
`;

const SkillsShowcaseSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  background: var(--color-charcoal);

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const SkillsCategory = styled.div`
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 800;
  color: var(--color-cream);
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillsIconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const SkillIconItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    color: var(--color-cream);
    transition: all 0.3s ease;
  }

  &:hover svg {
    color: var(--color-red);
  }

  @media (max-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const SkillIconName = styled.span`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-cream);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;

  ${SkillIconItem}:hover & {
    color: var(--color-red);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SkillsTagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillTag = styled(motion.div)`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  background: var(--color-cream);
  color: var(--color-black);
  border: 2px solid var(--color-black);
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background: var(--color-red);
    color: var(--color-cream);
    border-color: var(--color-red);
  }
`;
