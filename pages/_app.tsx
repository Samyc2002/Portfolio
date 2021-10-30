import type { AppProps } from 'next/app'

import '../styles/globals.css'
import ColourScheme from '../contexts/ColourScheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColourScheme>
      <Component {...pageProps} />
    </ColourScheme>
  )
}

export default MyApp
