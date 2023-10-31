import styled, { css } from 'styled-components';

export const CopyrightDiv = styled.div`
  margin: 40px 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;

  h3 {
    margin-bottom: 20px;
  }

  ul {
    text-align: justify;
    list-style: none;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    color: white;
  }

  a:link {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    padding-top: 40px;
    position: absolute;
    z-index: 10;
    width: 100%;
    text-align: center;
    background-color: ${theme.colors.background.primaryMate};
    color: white;
  `}
`;
