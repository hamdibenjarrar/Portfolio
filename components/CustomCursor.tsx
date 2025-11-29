"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animateFollower = () => {
      const distX = mouseX - followerX;
      const distY = mouseY - followerY;

      followerX += distX * 0.1;
      followerY += distY * 0.1;

      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

      requestAnimationFrame(animateFollower);
    };

    // Handle hover effects on interactive elements
    const handleMouseEnter = () => {
      cursor?.classList.add("hover");
      follower?.classList.add("hover");
    };

    const handleMouseLeave = () => {
      cursor?.classList.remove("hover");
      follower?.classList.remove("hover");
    };

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter as any);
      el.addEventListener("mouseleave", handleMouseLeave as any);
    });

    document.addEventListener("mousemove", handleMouseMove);
    animateFollower();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter as any);
        el.removeEventListener("mouseleave", handleMouseLeave as any);
      });
    };
  }, []);

  return (
    <>
      <Cursor ref={cursorRef} />
      <Follower ref={followerRef} />
    </>
  );
}

const Cursor = styled.div`
  position: fixed;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-red);
  pointer-events: none;
  z-index: 9999;
  top: -5px;
  left: -5px;
  transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;
  mix-blend-mode: difference;

  &.hover {
    width: 40px;
    height: 40px;
    background: rgba(193, 39, 45, 0.3);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Follower = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--color-red);
  pointer-events: none;
  z-index: 9998;
  top: -20px;
  left: -20px;
  transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
  opacity: 0.5;

  &.hover {
    width: 60px;
    height: 60px;
    border-color: var(--color-accent);
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
