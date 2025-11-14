import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gold: string;
      gray: string;
      lightgray: string;
      orange: string;
      white: string;
      lightgold: string;
      khaki: string;
      lightkhaki: string;
      inherit: string;
      default: string;
    };
    fontSize: {
      h6: string;
      h5: string;
      h4: string;
      h3: string;
      h2: string;
      h1: string;
      subtitle: string;
      body1: string;
      body2: string;
    };
    breakPoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    maxWidth: string;
  }
}
