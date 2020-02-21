import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  width: 30%;
  height: 30px;
  min-width: 250px;
  max-width: 350px;
  margin: 4px;
  padding: 8px;
  border-radius: 4px;
  border: none;
`;

const Button = styled.button`
  width: 31%;
  min-width: 250px;
  max-width: 350px;
  height: 50px;
  margin: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  border-radius: 24px;
  padding: 10px 24px;
  border: none;
  font-weight: bold;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const RegistrationForm = ({ onRouteChange }) => {
  return (
    <Container>
      <h3>Hey, it's you again. Isn't it?</h3>
      <InputField type="text" placeholder="Your emailadress"></InputField>
      <InputField type="password" placeholder="Your password"></InputField>
      <Button onClick={() => onRouteChange('home')}>Sign in</Button>
    </Container>
  );
};

export default RegistrationForm;
