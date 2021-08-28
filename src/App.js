import React from "react";
import {
  createTheme,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { createGlobalStyle } from "styled-components";

import ContainerCard from "./components/ContainerCard/ContainerCard";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 1em;
    margin: 0 auto;
    font-family: 'Prompt', sans-serif;
  }
`;

const theme = createTheme({
  typography: {
    fontFamily: `"Prompt", sans-serif`,
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <ContainerCard />
      </StylesProvider>
    </MuiThemeProvider>
  );
};

export default App;
