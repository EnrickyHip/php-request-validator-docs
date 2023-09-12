import { MenuList } from '../SideBar/styled';
import { useState } from 'react';
import { SubMenuArrow, SubMenuContainer } from './styled';
import { MenuItemLi, MenuLink } from '../MenuItem/styled';

interface SubMenuProps {
  children: React.ReactNode;
  title: string;
  level?: number;
}

export function SubMenu({ children, title, level = 0 }: SubMenuProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <MenuItemLi>
      <MenuLink href="" onClick={() => setCollapsed(!collapsed)}>
        <SubMenuArrow />
        {title}
      </MenuLink>
      <SubMenuContainer level={level} collapse={collapsed}>
        <MenuList>{children}</MenuList>
      </SubMenuContainer>
    </MenuItemLi>
  );
}
