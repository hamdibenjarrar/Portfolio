"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface NavItemData {
  href: string;
  label: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);

  // Check if current page has dark background in hero section
  const isDarkPage = router.pathname === '/about' || router.pathname === '/projects' || router.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const navItems: NavItemData[] = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" }
  ];

  return (
    <NavbarContainer $scrolled={scrolled} $isDarkPage={isDarkPage} ref={navRef}>
      <NavbarContent>
        <Logo href="/" $isDarkPage={isDarkPage && !scrolled}>
          <LogoText>HBJ</LogoText>
          <LogoDot>●</LogoDot>
        </Logo>

        <DesktopNav>
          <NavLinks>
            {navItems.map((item) => (
              <NavItem 
                key={item.href} 
                $active={router.pathname === item.href}
                $isDarkPage={isDarkPage && !scrolled}
              >
                <Link href={item.href}>{item.label}</Link>
              </NavItem>
            ))}
          </NavLinks>
        </DesktopNav>

        <MobileMenuButton 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
          $isDarkPage={isDarkPage && !scrolled}
        >
          <MenuLine $open={isOpen} $top $isDarkPage={isDarkPage && !scrolled} />
          <MenuLine $open={isOpen} $middle $isDarkPage={isDarkPage && !scrolled} />
          <MenuLine $open={isOpen} $bottom $isDarkPage={isDarkPage && !scrolled} />
        </MobileMenuButton>
      </NavbarContent>

      <AnimatePresence>
        {isOpen && (
          <MobileNav
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <MobileNavLinks>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <MobileNavItem $active={router.pathname === item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </MobileNavItem>
                </motion.div>
              ))}
            </MobileNavLinks>
          </MobileNav>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav<{ $scrolled: boolean; $isDarkPage: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$scrolled ? 'var(--color-cream)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.$scrolled ? '1px solid var(--color-cream-dark)' : '1px solid transparent'};
`;

const NavbarContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled(Link)<{ $isDarkPage?: boolean }>`
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 900;
  color: ${props => props.$isDarkPage ? 'var(--color-cream)' : 'var(--color-black)'};
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-red);
  }
`;

const LogoText = styled.span`
  display: inline-block;
`;

const LogoDot = styled.span`
  color: var(--color-red);
  font-size: 1.5rem;
`;

const DesktopNav = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
`;

const NavItem = styled.li<{ $active: boolean; $isDarkPage?: boolean }>`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  cursor: pointer;
  position: relative;

  a {
    color: ${props => {
      if (props.$active) return 'var(--color-red)';
      return props.$isDarkPage ? 'var(--color-cream)' : 'var(--color-black)';
    }};
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-red);
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: var(--color-red);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button<{ $isDarkPage?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuLine = styled.span<{ $open: boolean; $top?: boolean; $middle?: boolean; $bottom?: boolean; $isDarkPage?: boolean }>`
  width: 100%;
  height: 2px;
  background: ${props => props.$isDarkPage ? 'var(--color-cream)' : 'var(--color-black)'};
  transition: all 0.3s ease;
  transform-origin: center;

  ${props => props.$open && props.$top && `
    transform: translateY(8px) rotate(45deg);
  `}

  ${props => props.$open && props.$middle && `
    opacity: 0;
  `}

  ${props => props.$open && props.$bottom && `
    transform: translateY(-8px) rotate(-45deg);
  `}
`;

const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-charcoal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

const MobileNavItem = styled.div<{ $active: boolean }>`
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;

  a {
    color: ${props => props.$active ? 'var(--color-red)' : 'var(--color-cream)'};
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-red);
    }
  }
`;
