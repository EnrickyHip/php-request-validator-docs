import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 2;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const InnerNav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
`;

interface InnerMenuItemProps {
  active?: boolean;
}

export const InnerMenuItem = styled.li<InnerMenuItemProps>`
  ${({ active }) => css`
    font-weight: ${active ? '600' : 'auto'};
  `}
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

  a:hover {
    color: ${({ theme }) => theme.colors.text.colorHover};
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
    background-color: ${({ theme }) => theme.colors.background.primaryDarker};
  }
`;
