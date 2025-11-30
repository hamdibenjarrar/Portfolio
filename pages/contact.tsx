import { useState, useEffect, useRef, FormEvent } from "react";
import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { HiPhone, HiLocationMarker } from "react-icons/hi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  useEffect(() => {
    if (!formRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top center+=100",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top center+=100",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try emailing me directly at hamdibenjarrar@gmail.com' 
      });
    }
  };

  return (
    <Container>
      <Head>
        <title>Hamdi Ben Jarrar | Contact</title>
        <meta name="description" content="Get in touch to discuss digital solutions, social impact projects, or collaboration opportunities" />
      </Head>

      <Navbar />

      <Main>
        <HeroSection>
          <HeroContent
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>LET'S TALK</PageTitle>
            <PageSubtitle>Building the Future Together</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContactSection>
          <ContactGrid>
            <ContactInfoWrapper className="contact-info">
              <InfoTitle>Get In Touch</InfoTitle>
              <InfoText>
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out through any of the channels below.
              </InfoText>

              <ContactDetails>
                <ContactItem
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconCircle>
                    <FaEnvelope size={24} />
                  </IconCircle>
                  <ContactItemContent>
                    <ContactLabel>Email</ContactLabel>
                    <ContactLink href="mailto:hamdibenjarrar@gmail.com">
                      hamdibenjarrar@gmail.com
                    </ContactLink>
                  </ContactItemContent>
                </ContactItem>

                <ContactItem
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconCircle>
                    <HiPhone size={24} />
                  </IconCircle>
                  <ContactItemContent>
                    <ContactLabel>Phone</ContactLabel>
                    <ContactLink href="tel:+21622104391">
                      +216 22 104 391
                    </ContactLink>
                  </ContactItemContent>
                </ContactItem>

                <ContactItem
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconCircle>
                    <HiLocationMarker size={24} />
                  </IconCircle>
                  <ContactItemContent>
                    <ContactLabel>Location</ContactLabel>
                    <ContactValue>Tunis, Tunisia</ContactValue>
                  </ContactItemContent>
                </ContactItem>
              </ContactDetails>

              <SocialLinks>
                <SocialTitle>Connect With Me</SocialTitle>
                <SocialIcons>
                  <SocialIcon 
                    href="https://github.com/hamdibenjarrar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <FaGithub size={28} />
                  </SocialIcon>
                  <SocialIcon 
                    href="https://www.linkedin.com/in/hamdi-ben-jarrar-01b80a202/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <FaLinkedin size={28} />
                  </SocialIcon>
                  <SocialIcon 
                    href="https://www.instagram.com/hamdi.benjarrar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <FaInstagram size={28} />
                  </SocialIcon>
                  <SocialIcon 
                    href="https://wa.me/21622104391" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <FaWhatsapp size={28} />
                  </SocialIcon>
                </SocialIcons>
              </SocialLinks>
            </ContactInfoWrapper>

            <FormWrapper className="contact-form">
              <Form ref={formRef} onSubmit={handleSubmit}>
                <FormTitle>Send a Message</FormTitle>

                <FormGroup>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Discussion"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                  />
                </FormGroup>

                {status.message && (
                  <StatusMessage $type={status.type}>
                    {status.message}
                  </StatusMessage>
                )}

                <SubmitButton 
                  type="submit" 
                  disabled={status.type === 'loading'}
                  whileHover={{ scale: status.type === 'loading' ? 1 : 1.05 }}
                  whileTap={{ scale: status.type === 'loading' ? 1 : 0.95 }}
                >
                  {status.type === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                </SubmitButton>
              </Form>
            </FormWrapper>
          </ContactGrid>
        </ContactSection>
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
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem 4rem;
  background: var(--color-charcoal);
  position: relative;
  overflow: hidden;

  &::before {
    content: 'CONNECT';
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
    min-height: 40vh;
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

const ContactSection = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1.2fr;
    gap: 5rem;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const InfoTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--color-black);
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-gray);
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--color-white);
  border: 2px solid var(--color-black);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--color-red);
  }
`;

const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-black);
  color: var(--color-cream);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${ContactItem}:hover & {
    background: var(--color-red);
  }
`;

const ContactItemContent = styled.div`
  flex: 1;
`;

const ContactLabel = styled.span`
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray);
  display: block;
  margin-bottom: 0.3rem;
`;

const ContactLink = styled.a`
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-black);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-red);
  }
`;

const ContactValue = styled.span`
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-black);
`;

const SocialLinks = styled.div`
  padding-top: 2rem;
  border-top: 2px solid var(--color-black);
`;

const SocialTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-black);
  margin-bottom: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
  color: var(--color-cream);
  border: 2px solid var(--color-black);
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-red);
    border-color: var(--color-red);
  }
`;

const FormWrapper = styled.div`
  background: var(--color-white);
  border: 3px solid var(--color-black);
  padding: 3rem;

  @media (max-width: 640px) {
    padding: 2rem 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--color-black);
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-black);
  letter-spacing: 0.05em;
`;

const Input = styled.input`
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 1rem 1.2rem;
  background: var(--color-cream);
  border: 2px solid var(--color-black);
  color: var(--color-black);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-red);
    background: var(--color-white);
  }

  &::placeholder {
    color: rgba(26, 26, 26, 0.4);
  }
`;

const Textarea = styled.textarea`
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 1rem 1.2rem;
  background: var(--color-cream);
  border: 2px solid var(--color-black);
  color: var(--color-black);
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-red);
    background: var(--color-white);
  }

  &::placeholder {
    color: rgba(26, 26, 26, 0.4);
  }
`;

const StatusMessage = styled.div<{ $type: FormStatus['type'] }>`
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 1rem 1.2rem;
  border: 2px solid;
  border-color: ${props => 
    props.$type === 'success' ? 'var(--color-accent)' : 
    props.$type === 'error' ? 'var(--color-red)' : 
    'var(--color-black)'};
  background: ${props => 
    props.$type === 'success' ? 'rgba(212, 175, 55, 0.1)' : 
    props.$type === 'error' ? 'rgba(193, 39, 45, 0.1)' : 
    'transparent'};
  color: ${props => 
    props.$type === 'success' ? 'var(--color-accent)' : 
    props.$type === 'error' ? 'var(--color-red)' : 
    'var(--color-black)'};
`;

const SubmitButton = styled(motion.button)`
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
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background: var(--color-red);
    border-color: var(--color-red);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
