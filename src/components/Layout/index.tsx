import { ThemeContextProvider } from '@/Context/ThemeContext';
import Footer from '../Footer';
import Header from '../Header';
import { SideBar } from '../SideBar';
import { GridContainer, MainContent } from './styled';
import { GlobalStyles } from '@/styles/globalStyles';
import { ReactElement } from 'react';

export type Tab = 'docs' | 'api';

interface LayoutInterface {
  children: React.ReactNode;
  tab: Tab;
}

export const Layout = ({ children, tab }: LayoutInterface) => {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Header tab={tab} />
      <GridContainer>
        <SideBar tab={tab} />
        <MainContent>{children}</MainContent>
      </GridContainer>
      <Footer />
    </ThemeContextProvider>
  );
};

export function DocumentationLayout(page: ReactElement) {
  return <Layout tab="docs">{page}</Layout>;
}

export function DocumentationApi(page: ReactElement) {
  return <Layout tab="api">{page}</Layout>;
}
