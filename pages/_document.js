import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo.webp"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://vercel.live" />
          <link rel="preconnect" href="https://va.vercel-scripts.com" />
          <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
          <link rel="preload" as="image" href="/img.webp" type="image/webp" fetchpriority="high" />
          <link rel="canonical" href="https://hamdibenjarrar.tech" />
          <meta name="keywords" content="Hamdi Ben Jarrar, Full Stack Developer, Next.js, React, Node.js, Innovation Leader, Digital Solutions, Social Impact, Web Development, Tunisia" />
          <meta name="author" content="Hamdi Ben Jarrar" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hamdibenjarrar.tech" />
          <meta property="og:title" content="Hamdi Ben Jarrar | Innovation & Impact Leader | Full-Stack Developer" />
          <meta property="og:description" content="Full-Stack Developer & Digital Innovation Strategist with 5+ years of experience building impactful solutions for social change. Expert in Next.js, React, Node.js, and digital transformation projects across Europe and Africa." />
          <meta property="og:image" content="https://hamdibenjarrar.tech/img.webp" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://hamdibenjarrar.tech" />
          <meta name="twitter:title" content="Hamdi Ben Jarrar | Innovation & Impact Leader" />
          <meta name="twitter:description" content="Full-Stack Developer specializing in digital solutions for social change with expertise in Next.js, React, and Node.js" />
          <meta name="twitter:image" content="https://hamdibenjarrar.tech/img.webp" />
          
          {/* Mobile optimization */}
          <meta name="theme-color" content="#0A0A0A" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link rel="apple-touch-icon" href="/logo.webp" />
          
          {/* Structured Data */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Hamdi Ben Jarrar",
            "url": "https://hamdibenjarrar.tech",
            "image": "https://hamdibenjarrar.tech/img.webp",
            "jobTitle": "Full-Stack Developer & Innovation Leader",
            "description": "Full-Stack Developer & Digital Innovation Strategist with 2+ years of intensive experience building transformative solutions for social change",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tunis",
              "addressCountry": "Tunisia"
            },
            "sameAs": [
              "https://github.com/hamdibenjarrar",
              "https://www.linkedin.com/in/hamdi-ben-jarrar-01b80a202/",
              "https://www.instagram.com/hamdi.benjarrar"
            ],
            "knowsAbout": ["Next.js", "React", "Node.js", "Digital Innovation", "Social Impact", "Web Development"],
            "alumniOf": "GOMYCODE",
            "worksFor": {
              "@type": "Organization",
              "name": "Wallah We Can"
            }
          }) }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

