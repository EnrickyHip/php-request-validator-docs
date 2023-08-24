export enum ThemeMode {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export const lightTheme = {
  colors: {
    background: {
      primary: '#693F81',
      primaryLighter: '#8753A5',
      primaryDarker: '#5D3772',
      secondary: '#F5F5F5',
      secondaryDarker: '#DDDDDD',
      secondaryAlternative: '#DDDDDD',
    },
    text: {
      primary: '#111',
      primaryDarker: '#000',
      secondary: '#F5F5F5',
      secondaryDarker: '#DDDDDD',
    },
    border: 'rgb(200, 200, 200)',
  },
};

export type Theme = typeof lightTheme;

export const darkTheme: Theme = {
  colors: {
    background: {
      primary: '#693F81',
      primaryLighter: '#8753A5',
      primaryDarker: '#5D3772',
      secondary: '#12171F',
      secondaryDarker: '#111111',
      secondaryAlternative: '#2D2D2D',
    },
    text: {
      primary: '#F5F5F5',
      primaryDarker: '#DDDDDD',
      secondary: '#252525',
      secondaryDarker: '#111111',
    },
    border: 'rgb(85, 85, 85)',
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
