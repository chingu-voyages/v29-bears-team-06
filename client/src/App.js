import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const App = () => (
  <Container>
    <Logo>flytrap</Logo>
    <Card />
  </Container>
);

// STYLED COMPONENTS

const Container = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  margin-bottom: 30px;
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  color: red; 
`;

export default App;
