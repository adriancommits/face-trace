import React from 'react';
import Rank from './Rank.js';
import ImageInputForm from './ImageInputForm.js';
import FaceRecognition from './FaceRecognition.js';
import styled from 'styled-components';

const DetectForm = ({ onInputChange, detectFaces, box, imageUrl }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  return (
    <Container>
      <Rank />
      <ImageInputForm
        onInputChange={onInputChange}
        onDetectClicked={detectFaces}
      />
      <FaceRecognition box={box} imageUrl={imageUrl} />
    </Container>
  );
};

export default DetectForm;
