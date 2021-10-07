import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>AquaCare</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0085FF" />
        <meta
          name="description"
          content="Aplicativo que ajuda a cuidar da água do seu aquário"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
