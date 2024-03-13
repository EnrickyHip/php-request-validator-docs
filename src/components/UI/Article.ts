import styled, { css } from 'styled-components';

export const Article = styled.article`
  ${({ theme }) => css`
    padding: 40px 80px;

    h1 {
      font-size: 45px;
    }

    h2 {
      font-size: 35px;
      padding-bottom: 20px;
    }

    h3 {
      font-size: 20px;
      padding-bottom: 20px;
    }

    section {
      margin: 30px 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    p {
      margin-bottom: 20px;
      line-height: 28px;
    }

    a {
      text-decoration: none;
    }

    a:link,
    a:visited {
      color: ${theme.colors.text.selected};
    }

    a:active,
    a:hover {
      color: ${theme.colors.background.primaryLighter};
    }
  `}
`;
