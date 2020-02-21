import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  min-width: 250px;
  max-width: 350px;
  width: 30%;
  height: 250px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  margin: 16px;
`;

const BoundingBox = styled.div`
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <Card>
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
    </Card>
  );
};

export default FaceRecognition;
