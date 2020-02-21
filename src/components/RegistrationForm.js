import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 250px;
  max-width: 350px;
  width: 30%;
  height: 350px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  margin: 16px;
`;

const InputField = styled.input`
  margin: 4px;
  padding: 8px;
  width: 90%;
  height: 24px;
  border-radius: 4px;
  border: none;
`;

const Button = styled.button`
  width: 90%;
  height: 50px;
  margin: 4px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;

const TextLink = styled.a`
  font-size: 14px;
  margin: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

const RegistrationForm = ({ onRouteChange }) => {
  return (
    <Container>
      <Card>
        <h3>
          Hey there! <br />
          Create your account
        </h3>
        <InputField
          type="text"
          placeholder="What's your emailadress?"
        ></InputField>
        <InputField type="password" placeholder="Your password"></InputField>
        <InputField
          type="password"
          placeholder="Please repeat your password"
        ></InputField>
        <Button onClick={() => onRouteChange('home')}>Create account</Button>
        <TextLink onClick={() => onRouteChange('signIn')}>
          Already have an account? Sign in.
        </TextLink>
      </Card>
    </Container>
  );
};

export default RegistrationForm;
