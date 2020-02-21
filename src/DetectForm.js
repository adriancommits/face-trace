import React from 'react';
import Rank from './components/Rank.js';
import ImageInputForm from './components/ImageInputForm.js';
import FaceRecognition from './components/FaceRecognition.js';

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
