import Link from 'next/link';
import styled, { css } from 'styled-components';

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 62px;
  left: 0;
  height: 100vh;
  width: 250px;
  z-index: 1;
  gap: 25px;

  ${({ theme }) => css`
    border-right: 1px solid ${theme.colors.border};
  `}
`;

export const SideBarNav = styled.nav`
  width: 100%;
`;

export const MenuList = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
  `}
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 8px;

  ${({ theme }) => css`
    &:hover {
      background-color: ${theme.colors.background.secondaryAlternative};
    }

    color: ${theme.colors.text.primary};
  `};
`;
