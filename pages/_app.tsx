import type { AppProps } from 'next/app';
import '../styles/globals.css';

import Cursor from '../constants/Cursor';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cursor/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
