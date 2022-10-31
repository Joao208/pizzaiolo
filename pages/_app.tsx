import { createGlobalStyle } from 'styled-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
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
  }

  * ::selection {
    background: #9C931D;
  }

  *::-webkit-scrollbar {
    width: 1px;
  }


  *::-webkit-scrollbar-thumb {
    background: blue;
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
