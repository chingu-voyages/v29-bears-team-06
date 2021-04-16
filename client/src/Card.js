import React from 'react';
import styled from 'styled-components';

const Card = () => (
  <StyledCard>
    <Input type="text" placeholder="Email address" />
    <Input type="text" placeholder="Password" />
    <Button className="login">Log In</Button>
    <Wrapper>
      <SmallLink>Forgotten Password?</SmallLink>
      <SmallLink>Create New Account</SmallLink>
    </Wrapper>
    <Divider />
    <Button className="demo">Demo Account</Button>
  </StyledCard>
);

// STYLED COMPONENTS

const StyledCard = styled.div`
  height: 350px;
  width: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1); 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Input = styled.input`
  height: 52px;
  width: 364px;
  padding: 14px 16px;
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 6px; 
  font-size: 17px;

  &::placeholder { 
    color: ${(props) => props.theme.gray};
    opacity: 1;
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.background};
  }
`;

const Button = styled.button`
  height: 48px;
  width: 364px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
    transition-duration: 0s;
  }

  &.login { 
    background: ${(props) => props.theme.primary};

    &:hover {
      background: ${(props) => props.theme.primaryDark};
    }
  }

  &.demo {
    width: auto;
    padding: 0 20px;
    margin: 15px 0;
    background: ${(props) => props.theme.secondary};

    &:hover {
      background: ${(props) => props.theme.secondaryDark};
    }
  } 
`;

const Wrapper = styled.div`
  width: 364px;
  margin: 5px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SmallLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.primary};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Divider = styled.div`
  height: 0px;
  width: 364px;
  border-bottom: 1px solid ${(props) => props.theme.gray};
`;

export default Card;
