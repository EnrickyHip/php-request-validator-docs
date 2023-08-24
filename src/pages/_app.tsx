import { ThemeContextProvider } from '@/Context';
import { Layout } from '@/components/Layout';
import ThemeWrapper from '@/components/Wrapper';
import { GlobalStyles } from '@/styles/globalStyles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <ThemeWrapper>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeWrapper>
    </ThemeContextProvider>
  );
}
