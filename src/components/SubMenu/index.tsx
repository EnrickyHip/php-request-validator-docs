import { MenuList } from '../SideBar/styled';
import { useEffect, useRef, useState } from 'react';
import { SubMenuArrow, SubMenuContainer } from './styled';
import { MenuItemLi, MenuLink } from '../MenuItem/styled';

interface SubMenuProps {
  children: React.ReactNode;
  title: string;
  level?: number;
}

export function SubMenu({ children, title, level = 0 }: SubMenuProps) {
  const [collapsed, setCollapsed] = useState(true);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submenuRef.current) {
      const submenuHeight = submenuRef.current.scrollHeight;
      if (!collapsed) {
        submenuRef.current.style.maxHeight = `${submenuHeight}px`;
      } else {
        submenuRef.current.style.maxHeight = '0';
      }
    }
  }, [collapsed]);

  return (
    <MenuItemLi>
      <MenuLink href="" onClick={() => setCollapsed(!collapsed)}>
        <SubMenuArrow />
        {title}
      </MenuLink>
      <SubMenuContainer level={level} ref={submenuRef}>
        <MenuList>{children}</MenuList>
      </SubMenuContainer>
    </MenuItemLi>
  );
}
