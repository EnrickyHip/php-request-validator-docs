import { SubMenu } from '../SubMenu';
import { AsideContainer, MenuList, SideBarNav } from './styled';
import { MenuItem } from '../MenuItem';
import { Tab } from '../Layout';
import { useRouter } from 'next/router';

export interface SideBarProps {
  tab: Tab;
}

export function SideBar({ tab }: SideBarProps) {
  const router = useRouter();

  return (
    <AsideContainer>
      <SideBarNav>
        <MenuList>
          {tab === 'docs' && (
            <SubMenu title="Getting Started">
              <MenuItem active={router.pathname === '/docs/introduction'} href="/docs/introduction">
                Introduction
              </MenuItem>
              <MenuItem active={router.pathname === '/docs/installation'} href="/docs/installation">
                Installation
              </MenuItem>
              <MenuItem active={router.pathname === '/docs/first-validation'} href="/docs/first-validation">
                First Validation
              </MenuItem>
            </SubMenu>
          )}
        </MenuList>
      </SideBarNav>
    </AsideContainer>
  );
}
