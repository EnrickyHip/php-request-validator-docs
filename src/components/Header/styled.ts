import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 10px;
  position: fixed;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 15px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > a:hover {
    color: ${({ theme }) => theme.colors.text.secondaryDarker};
    transition: 0.2s ease-in-out;
  }
`;

export const Version = styled.span`
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
  font-weight: 600;
`;

export const ThemeIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  width: 42px;
  height: 42px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;
