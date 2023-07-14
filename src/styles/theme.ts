import { Theme } from './styledComponents';

export enum ThemeMode {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export const lightTheme: Theme = {
  colors: {
    background: {
      primary: '#693F81',
      primaryDarker: '#5D3772',
      secondary: '#F5F5F5',
      secondaryDarker: '#DDDDDD',
    },
    text: {
      primary: '#F5F5F5',
      primaryDarker: '#DDDDDD',
      secondary: '#111',
      secondaryDarker: '#000',
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
      primary: '#F5F5F5',
      primaryDarker: '#DDDDDD',
      secondary: '#252525',
      secondaryDarker: '#111111',
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
