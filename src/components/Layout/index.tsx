import Header from '../Header';
import { SideBar } from '../SideBar';
import { Content } from './styled';

export type Tab = 'docs' | 'api';

interface LayoutInterface {
  children: React.ReactNode;
  tab: Tab;
}

export const Layout = ({ children, tab }: LayoutInterface) => {
  return (
    <>
      <Header tab={tab} />
      <SideBar tab={tab} />
      <Content>{children}</Content>
    </>
  );
};
