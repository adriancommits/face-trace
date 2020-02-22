import React from 'react';
import Rank from './Rank.js';
import ImageInputForm from './ImageInputForm.js';
import FaceRecognition from './FaceRecognition.js';
import styled from 'styled-components';

const DetectForm = ({ onInputChange, detectFaces, box, imageUrl }) => {
  return (
    <>
      <Rank />
      <ImageInputForm
        onInputChange={onInputChange}
        onDetectClicked={detectFaces}
      />
      <FaceRecognition box={box} imageUrl={imageUrl} />
    </>
  );
};

export default DetectForm;
