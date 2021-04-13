import React from 'react';
import styled from 'styled-components';

const Card = () => { 
  return (
    <StyledCard>
      <Input type="text" />
      <Input type="text" />
      <Button background="red">Log In</Button>
      <Button background="blue">Demo Account</Button>
    </StyledCard>
  ) 
}

const StyledCard = styled.div`
  height: 350px;
  width: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1); 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Input = styled.input`
  height: 52px;
  width: 364px;
  border: 1px solid rgb(221, 223, 226);
  border-radius: 6px; 
`;

const Button = styled.button`
  height: 52px;
  width: 364px;
  border: none;
  border-radius: 6px;
  background: ${props => props.background};
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export default Card;