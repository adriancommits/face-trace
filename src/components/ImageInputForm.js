import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const SearchField = styled.input`
  width: 40%;
  min-width: 200px;
  max-width: 600px;
  height: 30px;
  margin: 16px 0px;
  border: none;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;

const DetectButton = styled.button`
  width: 20%;
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
    <Container>
      <SearchField
        type="text"
        onChange={props.onInputChange}
        placeholder="Paste an image link to detect a face in the image"
      />
      <DetectButton onClick={props.onDetectClicked}>Detect</DetectButton>
    </Container>
  );
};

export default ImageInputForm;
