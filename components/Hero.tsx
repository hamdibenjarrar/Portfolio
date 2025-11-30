"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !descRef.current || !ctaRef.current) return;

    // Check if mobile
    const isMobile = window.innerWidth < 1024;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) return; // Skip animations if user prefers reduced motion

    const ctx = gsap.context(() => {
      // Simplified animations for mobile
      const duration = isMobile ? 0.6 : 1;
      const delay = isMobile ? 0.1 : 0.2;

      // Animate title words
      const titleWords = titleRef.current?.querySelectorAll('.word');
      if (titleWords) {
        gsap.from(titleWords, {
          opacity: 0,
          y: isMobile ? 30 : 100,
          rotateX: isMobile ? 0 : -90,
          stagger: isMobile ? 0.05 : 0.1,
          duration: duration,
          ease: "power2.out",
          delay: delay
        });
      }

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: duration,
        delay: isMobile ? 0.3 : 0.8,
        ease: "power2.out"
      });

      // Animate description
      gsap.from(descRef.current, {
        opacity: 0,
        y: 20,
        duration: duration,
        delay: isMobile ? 0.5 : 1.2,
        ease: "power2.out"
      });

      // Animate CTA buttons
      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
          delay: isMobile ? 0.7 : 1.6,
          ease: "power2.out"
        });
      }

      // Disable parallax on mobile for better performance
      if (!isMobile) {
        gsap.to(heroRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          },
          y: 200,
          opacity: 0.3
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="word" style={{ display: 'inline-block', overflow: 'hidden' }}>
        <span style={{ display: 'inline-block' }}>{word}&nbsp;</span>
      </span>
    ));
  };

  return (
    <HeroSection ref={heroRef}>
      <HeroContent>
        <ContentGrid>
          <TextContent>
            <Subtitle ref={subtitleRef}>
              HAMDI BEN JARRAR
            </Subtitle>
            
            <LargeTitle ref={titleRef}>
              {splitText("Full-Stack Developer & Innovation Leader")}
            </LargeTitle>

            <Description ref={descRef}>
              Innovation & Impact Leader | Full-Stack Developer | Experience Designer. 
              Experienced in deploying digital solutions, web projects, and social impact initiatives. 
              Skilled in Next.js, React, Node.js, digital strategy, and project management.
            </Description>

            <CTAGroup ref={ctaRef}>
              <Link href="/projects" passHref legacyBehavior>
                <PrimaryButton
                  as={motion.a}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  VIEW PROJECTS
                </PrimaryButton>
              </Link>
              
              <Link href="/contact" passHref legacyBehavior>
                <SecondaryButton
                  as={motion.a}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  GET IN TOUCH
                </SecondaryButton>
              </Link>
            </CTAGroup>
          </TextContent>

          <ImageContent>
            <ProfileImageWrapper
              as={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Image 
                src="/img.png" 
                alt="Hamdi Ben Jarrar - Full-Stack Developer and Innovation Leader" 
                width={500}
                height={500}
                priority
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                style={{ objectFit: 'cover' }}
              />
              <ImageBorder />
            </ProfileImageWrapper>
          </ImageContent>
        </ContentGrid>
      </HeroContent>

      <BackgroundText>
        CREATIVE
      </BackgroundText>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 2rem 4rem;
  overflow: hidden;
  background: var(--color-cream);

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  z-index: 2;
  position: relative;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 6rem;
  }
`;

const TextContent = styled.div`
  width: 100%;
`;

const ImageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1023px) {
    order: -1;
    margin-bottom: 2rem;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 5px solid var(--color-black);
    position: relative;
    z-index: 2;
    filter: grayscale(20%);
    transition: all 0.4s ease;
  }
  
  &:hover img {
    filter: grayscale(0%);
    transform: scale(1.02);
  }
`;

const ImageBorder = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  border: 3px solid var(--color-red);
  z-index: 1;
  transition: all 0.4s ease;

  ${ProfileImageWrapper}:hover & {
    top: 30px;
    left: 30px;
  }
`;

const LargeTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(3rem, 12vw, 10rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, var(--color-black) 0%, var(--color-red) 50%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  text-transform: uppercase;
  position: relative;
  
  &::after {
    content: 'Full-Stack Developer & Innovation Leader';
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: -1;
    -webkit-text-stroke: 2px var(--color-red);
    -webkit-text-fill-color: transparent;
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    
    &::after {
      top: 2px;
      left: 2px;
      -webkit-text-stroke: 1px var(--color-red);
    }
  }
`;

const Subtitle = styled.h2`
  font-family: var(--font-body);
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 500;
  letter-spacing: 0.1em;
  color: var(--color-red);
  margin-bottom: 3rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Description = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw, 1.4rem);
  line-height: 1.8;
  color: var(--color-gray);
  max-width: 800px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

const PrimaryButton = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 1.5rem 3rem;
  background: var(--color-black);
  color: var(--color-cream);
  border: 2px solid var(--color-black);
  cursor: pointer;
  transition: all 0.4s ease;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--color-red);
    transition: left 0.4s ease;
    z-index: -1;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    border-color: var(--color-red);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1.2rem 2rem;
  }
`;

const SecondaryButton = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 1.5rem 3rem;
  background: transparent;
  color: var(--color-black);
  border: 2px solid var(--color-black);
  cursor: pointer;
  transition: all 0.4s ease;
  text-transform: uppercase;
  display: inline-block;

  &:hover {
    background: var(--color-black);
    color: var(--color-cream);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1.2rem 2rem;
  }
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: clamp(8rem, 20vw, 20rem);
  font-weight: 900;
  color: var(--color-cream-dark);
  opacity: 0.3;
  z-index: 1;
  white-space: nowrap;
  letter-spacing: -0.05em;
  pointer-events: none;
  user-select: none;
`;
