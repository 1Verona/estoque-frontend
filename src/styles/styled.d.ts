import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      primaryHover: string;
      danger: string;
      info: string;
      tableHeader: string;
      tableText: string;
      tableHover: string;
    };
    borderRadius: string;
    shadow: string;
  }
}