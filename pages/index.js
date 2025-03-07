"use client"

import Head from "next/head"
import styled from "styled-components"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import FeaturedProjects from "../components/FeaturedProjects"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Welcome to my portfolio website" />
        <link rel="icon" href="/logo.png"/>
      </Head>

      <Navbar />

      <Main>
        <Hero />

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Skills
          </SectionTitle>
          <Skills />
        </Section>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </SectionTitle>
          <FeaturedProjects />
        </Section>
      </Main>

      <Footer />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

const Section = styled.section`
  margin: 6rem 0;
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(20deg, #daa797, #d35040);
    border-radius: 2px;
  }
`

