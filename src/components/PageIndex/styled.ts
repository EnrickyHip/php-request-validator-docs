import styled, { css } from 'styled-components';

export const PageIndexAside = styled.aside``;

export const PageIndexList = styled.ul`
  position: sticky;
  top: 76px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface PageIndexItemProps {
  active: boolean;
}

export const PageIndexLink = styled.a<PageIndexItemProps>`
  text-decoration: none;
  transition: 0.2s ease-in-out;

  ${({ theme, active }) => css`
    color: ${active ? theme.colors.text.selected : theme.colors.text.primaryDarker};

    &:hover {
      color: ${theme.colors.text.selected};
    }
  `}
`;
