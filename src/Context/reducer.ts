import { ThemeMode, saveTheme } from '@/styles/theme';

export enum ThemeTypeAction {
  TOGGLE_THEME,
  SET_THEME,
}

export type ThemeState = {
  mode: ThemeMode;
};

export type ThemeAction = {
  type: ThemeTypeAction;
  payload?: ThemeMode;
};

export const initialState: ThemeState = {
  mode: ThemeMode.LIGHT,
};

export const reducer = (state: ThemeState = { ...initialState }, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case ThemeTypeAction.SET_THEME:
      return { ...state, mode: action.payload ? action.payload : ThemeMode.LIGHT };

    case ThemeTypeAction.TOGGLE_THEME: {
      const theme = state.mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK;
      saveTheme(theme);
      return { ...state, mode: theme };
    }

    default:
      return { ...state };
  }
};
