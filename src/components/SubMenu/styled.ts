import styled, { css } from 'styled-components';

interface SubMenuContainerProps {
  collapse: boolean;
  level: number;
}

export const SubMenuContainer = styled.div<SubMenuContainerProps>`
  ${({ collapse, level }) => css`
    visibility: ${collapse ? 'hidden' : 'auto'};

    a {
      padding-left: ${25 * level}px;
    }
  `}
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
