import React from 'react';
import styled from 'styled-components';

const SearchField = styled.input`
  width: 50%;
  height: 30px;
  margin: 16px 0px;
  border: none;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;

const DetectButton = styled.button`
  width: 30%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 10px 24px;
  border: none;
  font-weight: bold;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;

const ImageInputForm = (props) => {
  return (
    <>
      <p>Paste an image link to detect faces in the image.</p>
      <SearchField type="text" onChange={props.onInputChange} />
      <DetectButton onClick={props.onDetectClicked}>Detect</DetectButton>
    </>
  );
};

export default ImageInputForm;
