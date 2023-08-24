import { MenuList } from '../SideBar/styled';
import { useState } from 'react';
import { SubMenuArrow, SubMenuContainer } from './styled';
import { MenuItemLi, MenuLink } from '../MenuItem/styled';

interface SubMenuProps {
  children: React.ReactNode;
  title: string;
}

export function SubMenu({ children, title }: SubMenuProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <MenuItemLi>
      <MenuLink href="" onClick={() => setCollapsed(!collapsed)}>
        <SubMenuArrow />
        {title}
      </MenuLink>
      {collapsed && (
        <SubMenuContainer>
          <MenuList>{children}</MenuList>
        </SubMenuContainer>
      )}
    </MenuItemLi>
  );
}
