import type { AppProps } from 'next/app'
import { theme } from '../components/theme'
import { ThemeProvider } from 'theme-ui'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
