export enum ThemeMode {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export const lightTheme = {
  colors: {
    background: {
      primary: '#F5F5F5',
      primaryDarker: '#E1E1E1',
      secondary: '#71438B',
      secondaryDarker: '#59376C',
    },
    text: {
      primary: '#111',
      primaryDarker: '#000',
      secondary: '#F5F5F5',
      secondaryDarker: '#E1E1E1',
    },
  },
};

export const darkTheme = {
  colors: {
    background: {
      primary: '#71438B',
      primaryDarker: '#59376C',
      secondary: '#252525',
      secondaryDarker: '#111111',
    },
    text: {
      primary: '#252525',
      primaryDarker: '#111111',
      secondary: '#71438B',
      secondaryDarker: '#59376C',
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
