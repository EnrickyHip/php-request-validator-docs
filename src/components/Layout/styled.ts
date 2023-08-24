import styled, { css } from 'styled-components';

export const Content = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 65px);
  `}
`;
