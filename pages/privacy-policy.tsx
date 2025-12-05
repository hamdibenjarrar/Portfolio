import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <Container>
      <Head>
        <title>Privacy Policy | Hamdi Ben Jarrar</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Navbar />

      <Main>
        <Content>
          <h1>Privacy Policy</h1>
          <p>Last updated: December 5, 2025</p>

          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>

          <h2>Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3>Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Hamdi Ben Jarrar Portfolio.</li>
            <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Website</strong> refers to Hamdi Ben Jarrar, accessible from https://hamdibenjarrar.tech</li>
          </ul>

          <h2>Collecting and Using Your Personal Data</h2>
          <h3>Types of Data Collected</h3>
          <h4>Personal Data</h4>
          <p>
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Usage Data</li>
          </ul>

          <h4>Usage Data</h4>
          <p>Usage Data is collected automatically when using the Service.</p>
          <p>
            Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>

          <h2>Google AdSense & DoubleClick Cookie</h2>
          <p>
            Google, as a third party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet.
          </p>
          <p>
            You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, You can contact us:</p>
          <ul>
            <li>By email: contact@hamdibenjarrar.tech</li>
          </ul>
        </Content>
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

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: var(--font-body);
  color: var(--color-charcoal);

  h1 {
    font-family: var(--font-display);
    font-size: 3rem;
    margin-bottom: 2rem;
    color: var(--color-black);
  }

  h2 {
    font-family: var(--font-display);
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    color: var(--color-black);
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;
