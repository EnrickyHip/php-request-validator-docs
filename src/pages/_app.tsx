import { ThemeContextProvider } from '@/Context';
import ThemeWrapper from '@/components/Wrapper';
import { GlobalStyles } from '@/styles/globalStyles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <ThemeWrapper>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeWrapper>
    </ThemeContextProvider>
  );
}
