"use client";

import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion, useAnimation, useAnimate } from "framer-motion";

const COLORS = {
  teal: '#7BABB2',
  darkBlue: '#112129',
  brightTeal: '#26879C',
  paleCyan: '#B4F4F7',
  darkTeal: '#295261',
  peach: '#DBB6AE',
  red: 'var(--color-red)'
};

type AnimationType = 'ethereal' | 'pulse' | 'glitch' | 'typewriter' | 'stretch' | 'float' | 'vibrate' | 'outline';

const WORDS = [
  { text: "VISIONARY", font: "var(--font-cinzel)", weight: "700", color: COLORS.peach, size: "4.5rem", anim: "ethereal" },
  { text: "ARCHITECT", font: "var(--font-oswald)", weight: "700", color: COLORS.darkBlue, size: "5rem", anim: "typewriter" },
  { text: "SYSTEMS", font: "var(--font-body)", weight: "700", color: COLORS.red, size: "4rem", anim: "glitch" },
  { text: "ALGORITHM", font: "var(--font-major)", weight: "400", color: COLORS.darkTeal, size: "3.5rem", anim: "pulse" },
  { text: "HUMANITY", font: "var(--font-accent)", weight: "600", color: COLORS.teal, size: "4.5rem", anim: "stretch" },
  { text: "FUTURE", font: "var(--font-bold)", weight: "800", color: COLORS.darkBlue, outline: true, size: "6rem", anim: "float" },
  { text: "LEGACY", font: "var(--font-display)", weight: "900", color: COLORS.peach, size: "5rem", anim: "ethereal" },
  { text: "CODE", font: "var(--font-mono)", weight: "500", color: COLORS.brightTeal, size: "3rem", anim: "typewriter" },
  { text: "DESIGN", font: "var(--font-elegant)", weight: "400", color: COLORS.darkBlue, size: "5.5rem", anim: "outline" },
  { text: "ETHOS", font: "var(--font-bodoni)", weight: "700", color: COLORS.darkTeal, size: "4.5rem", anim: "vibrate" },
  { text: "DISCIPLINE", font: "var(--font-bebas)", weight: "400", color: COLORS.teal, size: "6rem", anim: "pulse" },
  { text: "FOCUS", font: "var(--font-condensed)", weight: "400", color: COLORS.red, size: "8rem", anim: "glitch" },
  { text: "CLARITY", font: "var(--font-prata)", weight: "400", color: COLORS.darkTeal, size: "4.5rem", anim: "ethereal" },
  { text: "DEPTH", font: "var(--font-anton)", weight: "400", color: COLORS.darkBlue, size: "5rem", anim: "float" },
  { text: "SCALE", font: "var(--font-unbounded)", weight: "700", color: COLORS.brightTeal, outline: true, size: "4rem", anim: "stretch" },
  { text: "IMPACT", font: "var(--font-rock)", weight: "400", color: COLORS.red, size: "3.5rem", anim: "vibrate" },
  { text: "CRAFT", font: "var(--font-righteous)", weight: "400", color: COLORS.darkTeal, size: "4.5rem", anim: "typewriter" },
  { text: "LOGIC", font: "var(--font-monoton)", weight: "400", color: COLORS.darkBlue, size: "4rem", anim: "outline" },
  { text: "INTUITION", font: "var(--font-abril)", weight: "400", color: COLORS.peach, size: "5rem", anim: "ethereal" },
  { text: "FLOW", font: "var(--font-bold)", weight: "800", color: COLORS.teal, size: "5.5rem", anim: "float" },
];

// --- Animations ---

const etherealKeyframes = keyframes`
  0%, 100% { opacity: 1; filter: blur(0px); transform: scale(1); }
  50% { opacity: 0.8; filter: blur(1.5px); transform: scale(0.98); }
`;

const pulseKeyframes = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.95); opacity: 0.8; }
`;

const glitchKeyframes = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const stretchKeyframes = keyframes`
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(1.15); letter-spacing: 0.05em; }
`;

const floatKeyframes = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const vibrateKeyframes = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
  100% { transform: translate(0); }
`;

// --- Components ---

const AnimatedText = ({ text, type, ...props }: { text: string, type: string, [key: string]: any }) => {
  // Split text for letter-based animations
  const letters = text.split("");

  if (type === 'typewriter') {
    return (
      <TypewriterWrapper>
        {letters.map((char, i) => (
          <TypewriterChar key={i} style={{ animationDelay: `${i * 0.1}s` }}>{char}</TypewriterChar>
        ))}
      </TypewriterWrapper>
    );
  }

  return <span>{text}</span>;
};

export default function IdentityMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const positionRef = useRef(0);
  const speedRef = useRef(1);
  const directionRef = useRef(1);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastPosition = useRef(0);
  const lastDragTime = useRef(0);
  const dragVelocity = useRef(0);

  useEffect(() => {
    // Start Loop immediately, no complex entrance to avoid conflicts
    startLoop();

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const startLoop = () => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isDragging.current) {
        if (Math.abs(dragVelocity.current) > 0.1) {
           dragVelocity.current *= 0.95;
           positionRef.current -= dragVelocity.current * deltaTime;
           directionRef.current = dragVelocity.current > 0 ? 1 : -1;
        } else {
           const moveAmount = speedRef.current * directionRef.current * (deltaTime * 0.06);
           positionRef.current -= moveAmount;
        }
      }

      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 2;
        if (positionRef.current <= -trackWidth) positionRef.current += trackWidth;
        else if (positionRef.current >= 0) positionRef.current -= trackWidth;
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
  };

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    lastPosition.current = positionRef.current;
    lastDragTime.current = performance.now();
    dragVelocity.current = 0;
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const currentX = e.pageX;
    const diff = (startX.current - currentX) * 1.5;
    positionRef.current = lastPosition.current - diff;
    
    const now = performance.now();
    const dt = now - lastDragTime.current;
    if (dt > 0) dragVelocity.current = (startX.current - currentX) / dt * 5;
    
    startX.current = currentX;
    lastPosition.current = positionRef.current;
    lastDragTime.current = now;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = 'grab';
  };

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    lastPosition.current = positionRef.current;
    lastDragTime.current = performance.now();
    dragVelocity.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].pageX;
    const diff = (startX.current - currentX) * 1.5;
    positionRef.current = lastPosition.current - diff;
    
    const now = performance.now();
    const dt = now - lastDragTime.current;
    if (dt > 0) dragVelocity.current = (startX.current - currentX) / dt * 5;
    
    startX.current = currentX;
    lastPosition.current = positionRef.current;
    lastDragTime.current = now;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <MarqueeContainer 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <MarqueeTrack ref={trackRef}>
        {[...WORDS, ...WORDS].map((word, i) => (
          <React.Fragment key={i}>
            <WordItem 
              $font={word.font} 
              $weight={word.weight} 
              $color={word.color}
              $outline={word.outline}
              $size={word.size}
              $anim={word.anim}
            >
              <AnimatedText text={word.text} type={word.anim} />
            </WordItem>
            <Separator />
          </React.Fragment>
        ))}
      </MarqueeTrack>
    </MarqueeContainer>
  );
}

const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--color-cream);
  padding: 6rem 0;
  display: flex;
  align-items: center;
  cursor: grab;
  z-index: 10;
  user-select: none;
  touch-action: pan-y;
  
  &:active {
    cursor: grabbing;
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  align-items: center;
  will-change: transform;
  white-space: nowrap;
  pointer-events: none;
`;

const WordItem = styled.span<{ $font: string; $weight: string; $color: string; $outline?: boolean; $size?: string; $anim: string }>`
  font-family: ${props => props.$font};
  font-weight: ${props => props.$weight};
  color: ${props => props.$outline ? 'transparent' : props.$color};
  -webkit-text-stroke: ${props => props.$outline ? `2px ${props.$color}` : 'none'};
  font-size: ${props => props.$size || '4rem'};
  margin: 0 2rem;
  display: inline-block;
  line-height: 1;
  pointer-events: auto;
  
  ${props => props.$anim === 'pulse' && css`animation: ${pulseKeyframes} 3s ease-in-out infinite;`}
  ${props => props.$anim === 'glitch' && css`
    &:hover { animation: ${glitchKeyframes} 0.3s cubic-bezier(.25, .46, .45, .94) both infinite; }
  `}
  ${props => props.$anim === 'stretch' && css`animation: ${stretchKeyframes} 4s ease-in-out infinite;`}
  ${props => props.$anim === 'float' && css`animation: ${floatKeyframes} 6s ease-in-out infinite;`}
  ${props => props.$anim === 'vibrate' && css`&:hover { animation: ${vibrateKeyframes} 0.5s ease-in-out infinite; }`}
  ${props => props.$anim === 'ethereal' && css`animation: ${etherealKeyframes} 5s ease-in-out infinite;`}
  ${props => props.$anim === 'outline' && css`
    transition: all 0.3s ease;
    &:hover {
      color: transparent;
      -webkit-text-stroke: 2px ${props.$color};
      transform: scale(1.1);
    }
  `}

  &:hover {
    color: var(--color-red);
    -webkit-text-stroke: 0px;
    cursor: pointer;
    
    /* Override for outline anim to keep its specific hover effect */
    ${props => props.$anim === 'outline' && css`
       color: transparent;
       -webkit-text-stroke: 2px var(--color-red);
    `}
  }
`;

const Separator = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--color-charcoal);
  border-radius: 50%;
  margin: 0 1rem;
  opacity: 0.3;
  display: inline-block;
`;

// Animation Wrappers
const TypewriterWrapper = styled.span`
  display: inline-flex;
`;

const fadeInKeyframes = keyframes`
  to { opacity: 1; }
`;

const typewriterKeyframes = keyframes`
  0%, 20% { opacity: 0; }
  40%, 80% { opacity: 1; }
  100% { opacity: 0; }
`;

const TypewriterChar = styled.span`
  opacity: 0;
  animation: ${fadeInKeyframes} 0.1s forwards, ${typewriterKeyframes} 4s infinite;
`;
