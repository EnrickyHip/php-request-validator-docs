import { SubMenu } from '../SubMenu';
import { AsideContainer, MenuList, SideBarNav } from './styled';
import { MenuItem } from '../MenuItem';

export function SideBar() {
  return (
    <AsideContainer>
      <SideBarNav>
        <MenuList>
          <SubMenu level={1} title="Getting Started">
            <MenuItem href="/overview">Overview</MenuItem>
            <SubMenu level={2} title="ashcaiusd">
              <MenuItem href="/overview">Overview 2</MenuItem>
              <MenuItem href="/overview">Overview 3</MenuItem>
            </SubMenu>
          </SubMenu>
        </MenuList>
      </SideBarNav>
    </AsideContainer>
  );
}
