export type Theme = {
  colors: {
    background: {
      primary: string;
      primaryDarker: string;
      secondary: string;
      secondaryDarker: string;
    };
    text: {
      primary: string;
      primaryDarker: string;
      secondary: string;
      secondaryDarker: string;
    };
  };
};

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
