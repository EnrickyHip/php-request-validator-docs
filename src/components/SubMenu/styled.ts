import styled, { css } from 'styled-components';

export const SubMenuContainer = styled.div`
  overflow: hidden;
  transition: all 300ms ease-in-out;

  a {
    padding-left: ${40}px;
  }
`;

export const SubMenuArrow = styled.i`
  ${({ theme }) => css`
    border: solid ${theme.colors.text.primary};
  `}

  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  margin-bottom: 3px;
`;
