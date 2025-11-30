"use client";

import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current || !textRef.current || !progressRef.current) return;

    const isMobile = window.innerWidth < 1024;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, isMobile ? 200 : 500);
        }
      });

      // Simplified animation for mobile
      if (isMobile) {
        tl.from(textRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out"
        });

        tl.to(progressRef.current, {
          scaleX: 1,
          duration: 1,
          ease: "power2.inOut"
        });

        tl.to(loaderRef.current, {
          opacity: 0,
          duration: 0.3
        });
      } else {
        tl.from(textRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out"
        });

        tl.to(progressRef.current, {
          scaleX: 1,
          duration: 2,
          ease: "power2.inOut"
        });

        tl.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 0.3
        });
      }
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <LoaderContainer ref={loaderRef}>
      <LoaderContent>
        <LoaderText ref={textRef}>
          <Brand>HBJ</Brand>
          <TagLine>INNOVATION & IMPACT</TagLine>
        </LoaderText>
        <ProgressBar>
          <ProgressFill ref={progressRef} />
        </ProgressBar>
      </LoaderContent>
      <BackgroundPattern>●</BackgroundPattern>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-charcoal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  overflow: hidden;
`;

const LoaderContent = styled.div`
  text-align: center;
  z-index: 2;
`;

const LoaderText = styled.div`
  margin-bottom: 3rem;
`;

const Brand = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 900;
  color: var(--color-cream);
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const TagLine = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: var(--color-red);
  letter-spacing: 0.2em;
  font-weight: 600;
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 2px;
  background: var(--color-gray);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const ProgressFill = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-red);
  transform: scaleX(0);
  transform-origin: left;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  font-family: var(--font-display);
  font-size: 30rem;
  font-weight: 900;
  color: var(--color-black);
  opacity: 0.2;
  z-index: 1;
  user-select: none;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 15rem;
  }
`;
