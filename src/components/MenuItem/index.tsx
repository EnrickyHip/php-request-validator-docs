import { MenuItemLi, MenuLink } from './styled';

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
}

export function MenuItem({ children, href }: MenuItemProps) {
  return (
    <MenuItemLi>
      <MenuLink href={href}>{children}</MenuLink>
    </MenuItemLi>
  );
}
