import React from 'react';
import styled from 'styled-components';

const SignInForm = ({ onRouteChange }) => {
  return (
    <>
      <h3>Sign In To Facetrace</h3>
      <input type="text" placeholder="email"></input>
      <input type="password" placeholder="password"></input>
      <button onClick={() => onRouteChange('home')}>Sign in</button>
    </>
  );
};

export default SignInForm;
