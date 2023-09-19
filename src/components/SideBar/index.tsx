import { SubMenu } from '../SubMenu';
import { AsideContainer, MenuList, SideBarNav } from './styled';
import { MenuItem } from '../MenuItem';
import { Tab } from '../Layout';

export interface SideBarProps {
  tab: Tab;
}

export function SideBar({ tab }: SideBarProps) {
  return (
    <AsideContainer>
      <SideBarNav>
        <MenuList>
          {tab === 'docs' && (
            <SubMenu title="Getting Started">
              <MenuItem href="/overview">Introduction</MenuItem>
              <MenuItem href="/installation">Installation</MenuItem>
              <MenuItem href="/">First Validation</MenuItem>
            </SubMenu>
          )}
        </MenuList>
      </SideBarNav>
    </AsideContainer>
  );
}
