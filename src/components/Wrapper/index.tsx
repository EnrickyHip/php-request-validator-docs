import { useEffect } from 'react';
import { useThemeContext } from '@/Context';
import { ThemeMode, darkTheme, getTheme, lightTheme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ThemeTypeAction } from '@/Context/reducer';

type ThemeWrapperProps = {
  children: JSX.Element | JSX.Element[];
};

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { state, dispatch } = useThemeContext();

  useEffect(() => {
    const storedTheme = getTheme();
    dispatch({ type: ThemeTypeAction.SET_THEME, payload: storedTheme });
  }, [dispatch]);

  const theme = state.mode === ThemeMode.LIGHT ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
