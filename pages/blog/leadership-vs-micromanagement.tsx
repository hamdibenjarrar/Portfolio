import Head from "next/head";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPost() {
  return (
    <Container>
      <Head>
        <title>Leadership vs. Micromanagement | Hamdi Ben Jarrar</title>
        <meta name="description" content="True leadership is about creating systems where you are no longer needed. Micromanagement is the fear of irrelevance." />
      </Head>

      <Navbar />

      <Main>
        <ArticleHeader>
          <Category>Leadership</Category>
          <Title>Leadership vs. Micromanagement</Title>
          <Date>November 28, 2025</Date>
        </ArticleHeader>

        <ArticleContent>
          <p>
            There is a fundamental misunderstanding in the modern workplace about what it means to lead. Many managers believe that leadership is about control. They believe it is about knowing every detail, making every decision, and being the central hub through which all information must pass.
          </p>
          <p>
            This is not leadership. This is a bottleneck. And worse, it is a manifestation of fear.
          </p>

          <h3>The Fear of Irrelevance</h3>
          <p>
            Micromanagement stems from the ego's fear of being unnecessary. If a team can function perfectly without me, the insecure manager thinks, then what is my value? So they insert themselves into processes where they add no value, simply to prove they exist. They hover, they tweak, they correct.
          </p>
          <p>
            The result is a team that learns helplessness. If the boss is going to change everything anyway, why try? If I have to ask for permission to breathe, why innovate? Autonomy dies, and with it, passion.
          </p>

          <h3>Leadership is System Building</h3>
          <p>
            True leadership is the opposite. It is the act of building a system that renders you obsolete. The goal of a great leader should be to make themselves unnecessary for the day-to-day operations.
          </p>
          <p>
            When I lead a team, my focus is on three things: <strong>Vision, Standards, and Obstacles</strong>.
          </p>
          <ul>
            <li><strong>Vision:</strong> Does everyone know exactly where we are going and why?</li>
            <li><strong>Standards:</strong> Does everyone know what "good" looks like?</li>
            <li><strong>Obstacles:</strong> What is blocking them that only I can remove?</li>
          </ul>
          <p>
            Once these are established, my job is to step back. It is to trust. Trust is not a soft sentiment; it is a strategic efficiency. A high-trust team moves ten times faster than a low-trust team because they don't have to stop to verify every step.
          </p>

          <h3>The Stoic Leader</h3>
          <p>
            This approach requires a stoic mindset. You must detach your ego from the outcome of every small task. You must accept that people will do things differently than you would. And sometimes, they will fail.
          </p>
          <p>
            But failure is the tuition we pay for growth. If you prevent your team from failing by micromanaging them, you also prevent them from growing. You keep them small so you can feel big.
          </p>
          <p>
            Leadership is service. It is serving the mission by empowering the people. It is having the courage to be invisible when things go right, and the integrity to be visible when things go wrong.
          </p>
        </ArticleContent>
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
  padding-top: 8rem;
`;

const ArticleHeader = styled.header`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
`;

const Category = styled.span`
  font-family: var(--font-body);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-red);
  display: block;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: var(--color-black);
  margin-bottom: 1rem;
  line-height: 1.1;
`;

const Date = styled.span`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-gray);
`;

const ArticleContent = styled.article`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem 6rem;
  font-family: var(--font-body);
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--color-charcoal);

  p {
    margin-bottom: 2rem;
  }

  h3 {
    font-family: var(--font-display);
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    color: var(--color-black);
  }

  ul {
    margin-bottom: 2rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 700;
    color: var(--color-black);
  }
`;
