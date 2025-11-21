import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryLight: string;
      success: string;
      successLight: string;
      danger: string;
      dangerLight: string;
      warning: string;
      warningLight: string;
      info: string;
      infoLight: string;
      background: string;
      surface: string;
      text: string;
      textSecondary: string;
      border: string;
      borderLight: string;
      tableHeader: string;
      tableText: string;
      tableHover: string;
    };
    gradients: {
      primary: string;
      dark: string;
      subtle: string;
    };
    borderRadius: string;
    shadow: string;
    shadowMd: string;
    shadowLg: string;
  }
}