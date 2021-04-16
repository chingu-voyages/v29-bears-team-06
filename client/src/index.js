import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import App from './App';

const theme = {
  primary: '#F50A0A',
  primaryDark: '#E60909',
  secondary: '#1964FF',
  secondaryDark: '#3773EE',
  background: '#FBF3E9',
  gray: '#DDDFE2',
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body { 
    font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  } 
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
