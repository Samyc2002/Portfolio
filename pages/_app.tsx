import type { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container} from '@mui/material';

import createEmotionCache from '../styles/createEmotionCache';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import theme from '../styles/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const clientSideEmotionCache = createEmotionCache();

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar/>
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
        <Footer/>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
