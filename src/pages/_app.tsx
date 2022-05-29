import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/globalStyles';
import themes from '@/styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={themes}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
