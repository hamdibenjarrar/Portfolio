import Head from "next/head";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPost() {
  return (
    <Container>
      <Head>
        <title>Tunisia: The Digital Awakening | Hamdi Ben Jarrar</title>
        <meta name="description" content="We are standing at the edge of a revolution. The next generation of Tunisian thinkers must embrace autonomy and digital literacy." />
      </Head>

      <Navbar />

      <Main>
        <ArticleHeader>
          <Category>Future Vision</Category>
          <Title>Tunisia: The Digital Awakening</Title>
          <Date>November 15, 2025</Date>
        </ArticleHeader>

        <ArticleContent>
          <p>
            I look at Tunisia today and I see a paradox. We are a nation of immense talent, deep history, and incredible resilience. Yet, we are shackled by systems that were built for a world that no longer exists. Our bureaucracy is slow, our educational models are outdated, and our mindset is often trapped in a cycle of waiting for permission.
          </p>
          <p>
            But beneath the surface, something is shifting. A digital awakening is happening, driven by a new generation that refuses to wait.
          </p>

          <h3>The Failure of the Old Model</h3>
          <p>
            For decades, the path to success in Tunisia was linear: get a degree, find a stable job (preferably with the state), and keep your head down. This model is dead. The global economy does not reward obedience; it rewards innovation, adaptability, and problem-solving.
          </p>
          <p>
            We are producing graduates who know how to pass exams but do not know how to think. We are teaching tools instead of principles. We are teaching memorization instead of creation. This is a national emergency.
          </p>

          <h3>The Digital Sovereign</h3>
          <p>
            The solution lies in what I call the <strong>Digital Sovereign</strong>. This is a new archetype of Tunisian citizen. They are not defined by their job title or their family name, but by their skills and their mindset.
          </p>
          <p>
            The Digital Sovereign understands that the internet has democratized leverage. You can learn anything, build anything, and sell anything to anyone in the world, from a laptop in Tunis or Tataouine. You do not need a visa to export code. You do not need a permit to export ideas.
          </p>

          <h3>Building the Ecosystem</h3>
          <p>
            My mission is to build the infrastructure for this awakening. We need more than just coding bootcamps. We need ecosystems that foster <strong>autonomy</strong>. We need mentorship that teaches <strong>strategic thinking</strong>, not just syntax.
          </p>
          <p>
            We need to normalize failure. In Silicon Valley, failure is a badge of honor; it means you tried. In Tunisia, it is a source of shame. We must kill this stigma. Innovation cannot exist without failure.
          </p>

          <h3>A Call to Action</h3>
          <p>
            To the youth of Tunisia: stop waiting. No one is coming to save you. The government cannot save you. The old guard cannot save you. You must save yourselves.
          </p>
          <p>
            Learn English. Master technology. Read philosophy. Build projects. Solve problems in your community. Connect with the global mind. The barriers are gone. The only walls left are the ones in your mind.
          </p>
          <p>
            Let us build a Tunisia that is not defined by its past, but by the brilliance of its future.
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

  strong {
    font-weight: 700;
    color: var(--color-black);
  }
`;
