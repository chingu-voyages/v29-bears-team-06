import React from 'react';
import styled from 'styled-components';

import {
  Add,
  Person,
  Star,
  PersonAdd,
  Check,
  Folder,
  Category,
  Group,
  Dashboard,
} from '@material-ui/icons';

const Sidebar = () => (
  <Nav>
    <Create />
    <Dash />
    <Filters />
    <Projects />
    <Roles />
  </Nav>
);

const Nav = styled.nav`
  height: 100%;
  width: 220px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${props => props.theme.gray3};
`;

const Create = () => (
  <Button>
    <Add />
    <span>Create Issue</span>
  </Button>
);

const Button = styled.button`
  height: 50px;
  width: 180px;
  display: flex;
  align-items: center;
  background: none;
  border-radius: 100px;
  border: 1px solid ${props => props.theme.gray3};
  box-shadow: 0 2px 4px 0 ${props => props.theme.gray3};
  font-size: 16px;
  font-weight: 500;

  // bad css
  > svg {
    height: 36px;
    width: 36px;
    margin-left: 14px;
    color: ${props => props.theme.primary};
  }

  > span {
    margin-left: 7px;
  }
`;

const Dash = () => (
  <Container>
    <NavItem>
      <Dashboard />
      Dashboard
    </NavItem>
  </Container>
);

const Filters = () => (
  <Container>
    <NavItem>
      <Person />
      Assigned to me
    </NavItem>
    <NavItem>
      <Star />
      Starred by me
    </NavItem>
    <NavItem className="highlighted">
      <PersonAdd />
      Reported by me
    </NavItem>
    <NavItem>
      <Check />
      To be verified
    </NavItem>
  </Container>
);

const Projects = () => (
  <Container>
    <NavItem>
      <Folder />
      Design
    </NavItem>
    <NavItem>
      <Folder />
      Client
    </NavItem>
    <NavItem>
      <Folder />
      Server
    </NavItem>
    <NavItem>
      <Folder />
      Database
    </NavItem>
    <NavItem>
      <Folder />
      Testing
    </NavItem>
  </Container>
);

const Roles = () => (
  <Container>
    <NavItem>
      <Category />
      Projects
    </NavItem>
    <NavItem>
      <Group />
      Members
    </NavItem>
  </Container>
);

const Container = styled.div`
  margin-top: 20px;
`;

const NavItem = styled.a`
  height: 32px;
  width: 200px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  border-radius: 0 16px 16px 0;
  font-size: 14px;
  color: ${props => props.theme.gray1};

  // bad css
  > svg {
    height: 18px;
    width: 18px;
    margin-right: 10px;
    color: inherit;
  }

  &.highlighted {
    background: rgba(256, 0, 0, 0.1);
    color: ${props => props.theme.primary};
    font-weight: 500;
  }

  &:hover {
    background: ${props => props.theme.gray2};
    cursor: pointer;
  }
`;

export default Sidebar;
