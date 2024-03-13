import styled, { css } from 'styled-components';

export const MainContent = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    display: grid;
    grid-template-columns: 7fr 2fr;
    min-height: calc(100vh - 65px);
    color: ${theme.colors.text.primaryDarker};
    margin-top: 65px;
  `}
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;
