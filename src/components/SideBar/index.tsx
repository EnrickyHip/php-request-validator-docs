import { SubMenu } from '../SubMenu';
import { AsideContainer, MenuList, SideBarNav } from './styled';
import { MenuItem } from '../MenuItem';

export function SideBar() {
  return (
    <AsideContainer>
      <SideBarNav>
        <MenuList>
          <SubMenu title="Getting Started">
            <MenuItem href="/overview">Introduction</MenuItem>
            <MenuItem href="/installation">Installation</MenuItem>
            <MenuItem href="/">First Validation</MenuItem>
          </SubMenu>
        </MenuList>
      </SideBarNav>
    </AsideContainer>
  );
}
