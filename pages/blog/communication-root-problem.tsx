import Head from "next/head";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPost() {
  return (
    <Container>
      <Head>
        <title>Communication: The Root of Every Problem | Hamdi Ben Jarrar</title>
        <meta name="description" content="Why 90% of technical and business failures are actually human failures, and how radical clarity can solve them." />
      </Head>

      <Navbar />

      <Main>
        <ArticleHeader>
          <Category>Human Behavior</Category>
          <Title>Communication: The Root of Every Problem</Title>
          <Date>December 5, 2025</Date>
        </ArticleHeader>

        <ArticleContent>
          <p>
            In my years working across technology, design, and strategy, I have observed a persistent pattern. When a project fails, when a deadline is missed, or when a product doesn't find its market, we almost always blame the "technical" execution. We say the code was buggy, the design was flawed, or the timeline was unrealistic.
          </p>
          <p>
            But if you dig deeper—if you perform a true root cause analysis—you will find that 90% of these failures are not technical. They are human. Specifically, they are failures of communication.
          </p>

          <h3>The Illusion of Understanding</h3>
          <p>
            George Bernard Shaw once said, "The single biggest problem in communication is the illusion that it has taken place." This is the silent killer of modern organizations. We sit in meetings, we nod our heads, we send Slack messages, and we assume that because words were spoken, meaning was transferred.
          </p>
          <p>
            But meaning is fragile. In the gap between what I think, what I say, what you hear, and what you interpret, there is an ocean of ambiguity. A developer hears "fast," a designer hears "smooth," and a manager hears "cheap." They all leave the room in agreement, only to collide violently three weeks later.
          </p>

          <h3>Radical Clarity as a Tool</h3>
          <p>
            The solution is what I call <strong>Radical Clarity</strong>. It is the stoic discipline of stripping away ambiguity. It requires us to be uncomfortable. It requires us to ask "stupid" questions. It requires us to say, "I don't understand what you mean by 'innovative'."
          </p>
          <p>
            In my work, I enforce a culture where clarity is valued above politeness. Politeness hides problems; clarity exposes them so they can be solved. This is not about being rude; it is about being effective. It is about respecting everyone's time enough to ensure we are all building the same cathedral.
          </p>

          <h3>The Developer's Responsibility</h3>
          <p>
            As developers and creators, we often hide behind our screens. We think our job is to write code. It is not. Our job is to solve problems. And you cannot solve a problem you do not understand.
          </p>
          <p>
            If you are building a feature without knowing <em>why</em> it exists, who it serves, and what success looks like, you are not an engineer; you are a typist. The best engineers I know are not the ones who type the fastest; they are the ones who ask the best questions. They are the ones who prevent 100 hours of wasted coding with 10 minutes of clarifying conversation.
          </p>

          <h3>Moving Forward</h3>
          <p>
            We need to stop treating communication as a "soft skill." It is the hardest skill. It is the operating system upon which all other skills run. If your OS is buggy, it doesn't matter how powerful your applications are; the system will crash.
          </p>
          <p>
            Start today. In your next conversation, refuse to accept ambiguity. Ask "why" until you reach the bedrock of truth. It will be uncomfortable. It will be tiring. But it will be the difference between mediocrity and excellence.
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

  em {
    font-style: italic;
    color: var(--color-black);
  }
`;
