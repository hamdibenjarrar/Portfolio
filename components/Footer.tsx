"use client";

import styled from "styled-components";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <MainSection>
          <FooterBrand>
            <BrandName>HAMDI BEN JARRAR</BrandName>
            <BrandTagline>Architect of Digital Ecosystems</BrandTagline>
          </FooterBrand>
          
          <FooterDescription>
            Bridging the gap between technology, strategy, and human potential. 
            Building systems that think, scale, and serve a higher purpose.
          </FooterDescription>
        </MainSection>

        <LinksSection>
          <LinksColumn>
            <ColumnTitle>Navigation</ColumnTitle>
            <FooterLinks>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterLinks>
          </LinksColumn>

          <LinksColumn>
            <ColumnTitle>Legal</ColumnTitle>
            <FooterLinks>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </FooterLinks>
          </LinksColumn>

          <LinksColumn>
            <ColumnTitle>Connect</ColumnTitle>
            <SocialLinks>
              <SocialLink
                href="https://github.com/hamdibenjarrar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub /> GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/hamdibenjarrar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin /> LinkedIn
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/hamdibenjarrar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram /> Instagram
              </SocialLink>
              <SocialLink
                href="mailto:hamdibenjarrar@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope /> Email
              </SocialLink>
              <SocialLink
                href="https://wa.me/21622104391"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp /> WhatsApp
              </SocialLink>
            </SocialLinks>
          </LinksColumn>
        </LinksSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {currentYear} Hamdi Ben Jarrar. All rights reserved.
        </Copyright>
        <MadeWith>
          Designed with purpose, built with passion
        </MadeWith>
      </FooterBottom>

      <BackgroundText>IMPACT</BackgroundText>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background: var(--color-charcoal);
  color: var(--color-cream);
  padding: 6rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 2rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 1fr;
    gap: 6rem;
  }
`;

const MainSection = styled.div``;

const FooterBrand = styled.div`
  margin-bottom: 2rem;
`;

const BrandName = styled.h3`
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  color: var(--color-cream);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BrandTagline = styled.p`
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: #E84855;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const FooterDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  color: #D5D0C3;
  max-width: 600px;
`;

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LinksColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--color-cream);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLink = styled(Link)`
  font-family: var(--font-body);
  font-size: 1rem;
  color: #D5D0C3;
  transition: all 0.3s ease;
  width: fit-content;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--color-red);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--color-red);
    
    &::after {
      width: 100%;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SocialLink = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  color: #D5D0C3;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  width: fit-content;

  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--color-red);
    
    svg {
      transform: scale(1.2);
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1400px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--color-gray);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copyright = styled.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: #BFBAB0;
`;

const MadeWith = styled.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: #BFBAB0;
  font-style: italic;
`;

const BackgroundText = styled.div`
  position: absolute;
  bottom: 2rem;
  right: -5rem;
  font-family: var(--font-display);
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: 900;
  color: var(--color-black);
  opacity: 0.3;
  z-index: 1;
  white-space: nowrap;
  letter-spacing: -0.05em;
  pointer-events: none;
  user-select: none;
  transform: rotate(-10deg);
`;
