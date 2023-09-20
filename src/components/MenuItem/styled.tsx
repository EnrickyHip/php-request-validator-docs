import Link from 'next/link';
import styled, { css } from 'styled-components';

interface MenuLinkProps {
  active: boolean;
}

export const MenuLink = styled(Link)<MenuLinkProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 8px;
  font-weight: 600;

  ${({ theme, active }) => css`
    color: ${theme.colors.text.primary};

    ${active &&
    css`
      background-color: ${theme.colors.background.secondaryAlternative};
      color: ${theme.colors.text.selected};
    `}

    &:hover {
      background-color: ${theme.colors.background.secondaryAlternative};
    }
  `};
`;

export const MenuItemLi = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
  `}
`;
