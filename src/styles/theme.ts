import { Theme } from './styledComponents';

export enum ThemeMode {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export const lightTheme: Theme = {
  colors: {
    background: {
      primary: '#F5F5F5',
      primaryDarker: '#DDDDDD',
      secondary: '#693F81',
      secondaryDarker: '#5D3772',
    },
    text: {
      primary: '#111',
      primaryDarker: '#000',
      secondary: '#F5F5F5',
      secondaryDarker: '#DDDDDD',
    },
  },
};

export const darkTheme: Theme = {
  colors: {
    background: {
      primary: '#693F81',
      primaryDarker: '#5D3772',
      secondary: '#252525',
      secondaryDarker: '#111111',
    },
    text: {
      primary: '#252525',
      primaryDarker: '#111111',
      secondary: '#693F81',
      secondaryDarker: '#5D3772',
    },
  },
};

export const getTheme = (): ThemeMode => {
  const storedTheme = localStorage.getItem('theme');

  if (!storedTheme) {
    return ThemeMode.LIGHT;
  }

  const theme = storedTheme as keyof typeof ThemeMode;
  return ThemeMode[theme];
};

export const saveTheme = (mode: ThemeMode) => localStorage.setItem('theme', mode.toString());
