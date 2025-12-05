import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "communication-root-problem",
    title: "Communication: The Root of Every Problem",
    excerpt: "Why 90% of technical and business failures are actually human failures, and how radical clarity can solve them.",
    date: "December 5, 2025",
    category: "Human Behavior"
  },
  {
    slug: "leadership-vs-micromanagement",
    title: "Leadership vs. Micromanagement",
    excerpt: "True leadership is about creating systems where you are no longer needed. Micromanagement is the fear of irrelevance.",
    date: "November 28, 2025",
    category: "Leadership"
  },
  {
    slug: "tunisia-digital-transformation",
    title: "Tunisia: The Digital Awakening",
    excerpt: "We are standing at the edge of a revolution. The next generation of Tunisian thinkers must embrace autonomy and digital literacy.",
    date: "November 15, 2025",
    category: "Future Vision"
  }
];

export default function Blog() {
  return (
    <Container>
      <Head>
        <title>Insights & Philosophy | Hamdi Ben Jarrar</title>
        <meta name="description" content="Essays on leadership, technology, stoicism, and the future of work." />
      </Head>

      <Navbar />

      <Main>
        <HeroSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>INSIGHTS</PageTitle>
            <PageSubtitle>Thoughts on Tech, Humanity, and the Future</PageSubtitle>
          </motion.div>
        </HeroSection>

        <BlogGrid>
          {posts.map((post) => (
            <BlogCard key={post.slug} href={`/blog/${post.slug}`}>
              <CardCategory>{post.category}</CardCategory>
              <CardTitle>{post.title}</CardTitle>
              <CardExcerpt>{post.excerpt}</CardExcerpt>
              <CardDate>{post.date}</CardDate>
            </BlogCard>
          ))}
        </BlogGrid>
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
`;

const HeroSection = styled.section`
  padding: 8rem 2rem 4rem;
  background: var(--color-charcoal);
  color: var(--color-cream);
  text-align: center;
`;

const PageTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--color-red);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const BlogGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BlogCard = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: var(--color-white);
  border: 1px solid rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    border-color: var(--color-black);
  }
`;

const CardCategory = styled.span`
  font-family: var(--font-body);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-red);
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: var(--color-black);
`;

const CardExcerpt = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-gray);
  margin-bottom: 2rem;
  flex: 1;
`;

const CardDate = styled.span`
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-charcoal);
  opacity: 0.6;
`;
