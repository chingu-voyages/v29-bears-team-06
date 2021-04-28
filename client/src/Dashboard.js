import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

const Dashboard = () => (
  <VerticalContainer>
    <Header />
    <HorizontalContainer>
      <Sidebar />
      <Main />
    </HorizontalContainer>
  </VerticalContainer>
);

const VerticalContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HorizontalContainer = styled.div`
  flex-grow: 2;
  display: flex;
`;

export default Dashboard;
