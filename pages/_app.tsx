import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container} from '@mui/material';
import { CacheProvider } from '@emotion/react';

import createEmotionCache from '../styles/createEmotionCache';
import Navbar from '../components/Navbar';
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
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
