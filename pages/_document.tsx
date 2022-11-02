import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { NextSeo } from 'next-seo'
import { colors } from 'utils/colors'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
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
      <Html style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Oxygen:wght@300;400;700&family=Rufina:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="icon" href="/favicon.png" />

          <meta name="theme-color" content="#1d1c16" />

          <NextSeo
            title="Pizzaiolo - Github Slack Integration"
            themeColor={colors.secondary}
            description="Get pull requests from GitHub right in your Slack"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}
