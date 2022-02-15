import type { AppProps } from 'next/app';

import { Navbar, Contact, Footer } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Contact/>
      <Footer/>
    </>
  );
}

export default MyApp;
