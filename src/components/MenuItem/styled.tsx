import Link from 'next/link';
import styled, { css } from 'styled-components';

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

export const MenuItemLi = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
  `}
`;
