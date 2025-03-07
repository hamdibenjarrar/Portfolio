"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "react-feather"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [])

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarContent>
        <Logo href="/">
          <LogoText>Portfolio</LogoText>
        </Logo>

        <DesktopNav>
          <NavLinks>
            <NavItem active={router.pathname === "/"}>
              <Link href="/">Home</Link>
            </NavItem>
            <NavItem active={router.pathname === "/about"}>
              <Link href="/about">About</Link>
            </NavItem>
            <NavItem active={router.pathname === "/projects"}>
              <Link href="/projects">Projects</Link>
            </NavItem>
            <NavItem active={router.pathname === "/contact"}>
              <Link href="/contact">Contact</Link>
            </NavItem>
          </NavLinks>
        </DesktopNav>

        <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </NavbarContent>

      <AnimatePresence>
        {isOpen && (
          <MobileNav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLinks>
              <MobileNavItem active={router.pathname === "/"}>
                <Link href="/">Home</Link>
              </MobileNavItem>
              <MobileNavItem active={router.pathname === "/about"}>
                <Link href="/about">About</Link>
              </MobileNavItem>
              <MobileNavItem active={router.pathname === "/projects"}>
                <Link href="/projects">Projects</Link>
              </MobileNavItem>
              <MobileNavItem active={router.pathname === "/contact"}>
                <Link href="/contact">Contact</Link>
              </MobileNavItem>
            </MobileNavLinks>
          </MobileNav>
        )}
      </AnimatePresence>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: ${(props) => (props.scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent")};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
  box-shadow: ${(props) => (props.scrolled ? "0 4px 20px rgba(0, 0, 0, 0.05)" : "none")};
  transition: all 0.3s ease;
`

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
`

const Logo = styled(Link)`
  text-decoration: none;
`

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(20deg, #daa797, #d35040);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const DesktopNav = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`

const NavItem = styled.li`
  position: relative;
  
  a {
    text-decoration: none;
    color: ${(props) => (props.active ?  "#D35040" : "#DCDDDF")};
    font-weight: ${(props) => (props.active ? "600" : "500")};
    transition: color 0.3s ease;
    
    &:hover {
      color: #D35040;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    background: linear-gradient(20deg, #daa797, #d35040);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #4B5563;
  cursor: pointer;
  
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNav = styled(motion.div)`
  overflow: hidden;
  background: white;
  
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 1rem 1.5rem;
`

const MobileNavItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #F3F4F6;
  
  &:last-child {
    border-bottom: none;
  }
  
  a {
    text-decoration: none;
    color: ${(props) => (props.active ?  "#D35040" : "#DCDDDF")};
    font-weight: ${(props) => (props.active ? "600" : "500")};
    font-size: 1.1rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #D35040;
    }
  }
`

