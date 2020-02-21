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
  height: 220px;
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

const P = styled.p`
  font-size: 13px;
`;

const SignInForm = ({ onRouteChange }) => {
  return (
    <Container>
      <Card>
        <h3>Hey, it's you again. Isn't it?</h3>
        <InputField type="text" placeholder="Your emailadress"></InputField>
        <InputField type="password" placeholder="Your password"></InputField>
        <Button onClick={() => onRouteChange('home')}>Sign in</Button>
      </Card>

      <Card>
        <h3>New around here?</h3>
        <P>
          No problem. <br />
          Create your account within a minute.
        </P>
        <Button
          onClick={() => {
            onRouteChange('registration');
          }}
        >
          Create an account now
        </Button>
      </Card>
    </Container>
  );
};

export default SignInForm;
