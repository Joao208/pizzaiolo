/* eslint-disable @next/next/no-title-in-document-head */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

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
      <Html>
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

          <title>Pizzaiolo - Github Slack Integration</title>

          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:title"
            content="Pizzaiolo - Github Slack Integration"
          />

          <link rel="shortcut icon" href="/icon.png" type="image/png" />
          <link rel="icon" href="/icon.png" />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}
