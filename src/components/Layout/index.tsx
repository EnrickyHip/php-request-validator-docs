import { SideBar } from '../SideBar';
import { Content } from './styled';

interface LayoutInterface {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutInterface) => {
  return (
    <>
      <SideBar />
      <Content>{children}</Content>
    </>
  );
};
