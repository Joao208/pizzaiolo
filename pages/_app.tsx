import { createGlobalStyle } from 'styled-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;

    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  * ::selection {
    background: #9C931D;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #32302B;
    opacity: 0.5;
  }


  *::-webkit-scrollbar-thumb {
    background: #CBC7B5;
    border-radius: 10px;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
