import { normalize } from "polished";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { theme } from "styles/theme";

const GlobalStyle = createGlobalStyle`${normalize()}`;

export function withTheme<P extends React.AnyProps>(
  Component: React.CT<P>
): React.FC<P> {
  return (props) => {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...props} />
        </ThemeProvider>
      </>
    );
  };
}
