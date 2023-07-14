import { Dispatch, createContext, useContext, useReducer } from 'react';
import { ThemeAction, ThemeState, initialState, reducer } from './reducer';

interface ThemeContextInterface {
  state: ThemeState;
  dispatch: Dispatch<ThemeAction>;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const context = { state, dispatch };
  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('You should use useThemeContext inside a ThemeContextProvider');

  return { ...context };
};
