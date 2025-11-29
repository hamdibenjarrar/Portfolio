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
          <link rel="icon" href="/logo.png"/>
          <meta name="description" content="Hamdi Ben Jarrar - Innovation & Impact Leader | Full-Stack Developer specializing in Next.js, React, Node.js. Building digital solutions for social impact." />
          <meta name="keywords" content="Hamdi Ben Jarrar, Full Stack Developer, Next.js, React, Node.js, Innovation Leader, Digital Solutions, Social Impact, Web Development, Tunisia" />
          <meta name="author" content="Hamdi Ben Jarrar" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hamdi Ben Jarrar | Innovation & Impact Leader | Full-Stack Developer" />
          <meta property="og:description" content="Building digital solutions that scale social impact. Expert in Next.js, React, Node.js, and digital innovation." />
          <meta property="og:image" content="/img.png" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Hamdi Ben Jarrar | Innovation & Impact Leader" />
          <meta name="twitter:description" content="Full-Stack Developer specializing in digital solutions for social impact" />
          <meta name="twitter:image" content="/img.png" />
          
          {/* Mobile optimization */}
          <meta name="theme-color" content="#0A0A0A" />
          
          <script dangerouslySetInnerHTML={{ __html: `window.__VERCEL_ANALYTICS_DISABLE = true;` }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

