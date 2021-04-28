import React from 'react';
import styled from 'styled-components';

import {
  Search as MagnifyingGlass,
  Notifications,
  Settings,
  AccountCircle,
} from '@material-ui/icons';
import { ReactComponent as BugLogo } from './assets/bug.svg';

const Header = () => (
  <StyledHeader>
    <Bug />
    <Search />
    <Options />
  </StyledHeader>
);

const StyledHeader = styled.header`
  height: 60px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.gray3};
`;

const Bug = styled(BugLogo)`
  height: 40px;
  width: 40px;
  margin-left: 20px;
`;

const Search = () => (
  <SearchBar placeholder="Search Flytrap">
    <MagnifyingGlass />
    <Input placeholder="Search Flytrap" />
  </SearchBar>
);

const SearchBar = styled.div`
  height: 40px;
  max-width: 620px;
  padding: 5px 10px;
  flex-grow: 2;
  display: flex;
  align-items: center;
  background: ${props => props.theme.gray2};
  border: none;
  border-radius: 10px;

  // bad css
  > svg {
    color: ${props => props.theme.gray1};
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 5px;
  border: none;
  background: transparent;
  color: ${props => props.theme.gray1};
  font-size: 14px;

  &::placeholder {
    color: ${props => props.theme.gray1};
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

const Options = () => (
  <IconWrapper>
    <Notifications />
    <Settings />
    <AccountCircle />
  </IconWrapper>
);

const IconWrapper = styled.div`
  > * {
    color: ${props => props.theme.gray1};
    margin-right: 20px;
  }
`;

export default Header;
