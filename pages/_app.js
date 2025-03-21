import { createGlobalStyle } from "styled-components"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #F9FAFB;
    color: #111827;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-1629124394187689"></meta>
        <title>Portfolio</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />

    </>
  )
}

export default MyApp

