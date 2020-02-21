import React from 'react';
import styled from 'styled-components';

const BoundingBox = styled.div`
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`;

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div width="100%" style={{ position: 'absolute' }}>
      <img
        id="inputimage"
        height="auto"
        src={imageUrl}
        alt="face to be detected"
      />
      <BoundingBox
        style={{
          top: box.topRow,
          bottom: box.bottomRow,
          left: box.leftCol,
          right: box.rightCol,
        }}
      ></BoundingBox>
    </div>
  );
};

export default FaceRecognition;
