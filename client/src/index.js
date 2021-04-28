import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// import App from './App';
import Dashboard from './Dashboard';

const theme = {
  primary: '#F50A0A',
  secondary: '#1964FF',
  background: '#FBF3E9',
  gray1: '#4A4646',
  gray2: 'hsla(0, 0%, 77%, 0.25)',
  gray3: '#DDDFE2',
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale; 
  }
  
  body { 
    font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  } 

  .material-icons {
    color: blue !important;
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <App /> */}
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
