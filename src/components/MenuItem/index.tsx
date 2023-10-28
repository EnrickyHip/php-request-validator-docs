import { MenuItemLi, MenuLink } from './styled';

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
  $active: boolean;
}

export function MenuItem({ children, href, $active }: MenuItemProps) {
  return (
    <MenuItemLi>
      <MenuLink active={$active} href={href}>
        {children}
      </MenuLink>
    </MenuItemLi>
  );
}
