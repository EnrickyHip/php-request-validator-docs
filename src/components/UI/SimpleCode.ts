import styled, { css } from 'styled-components';

export const SimpleCode = styled.code`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondaryAlternative};
    padding: 3px;
    border-radius: 5px;
  `}
`;
