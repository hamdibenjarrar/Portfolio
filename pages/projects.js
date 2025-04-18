"use client"

import Head from "next/head"
import styled from "styled-components"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"

export default function Projects() {
  const projects = [
    {
      id: 3,
      title: "Dinarwise",
      description: "A financial platform focused on digital currency solutions and services.",
      codeUrl: "https://dinarwise.me/",
      image: "/d.png", // Changed from "./d.png" to "/d.png"
    },
    {
      id: 1,
      title: "Sphere Animation",
      description: "A creative interactive 3D sphere animation built using HTML, CSS, and JavaScript.",
      codeUrl: "https://codepen.io/Hamdi-Ben-Jarrar/full/XJrMwjp",
      video: "/sphere.mp4",
    },
    {
      id: 2,
      title: "Starfield Tunnel",
      description: "A mesmerizing starfield tunnel effect using canvas and JavaScript.",
      codeUrl: "https://codepen.io/Hamdi-Ben-Jarrar/full/ZYzKGyp",
      video: "/starfield-tunnel.mp4",
    },
  ]

  return (
    <Container>
      <Head>
        <title>Portfolio | Projects</title>
        <meta name="description" content="Explore my projects and work" />
      </Head>

      <Navbar />

      <Main>
        <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1>My Projects</h1>
          <p>A collection of my recent creative coding projects.</p>
        </Header>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </ProjectsGrid>
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

const Header = styled(motion.header)`
  text-align: center;
  margin: 4rem 0;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(20deg, #daa797, #d35040);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: 1.2rem;
    color: #6B7280;
    max-width: 600px;
    margin: 0 auto;
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
