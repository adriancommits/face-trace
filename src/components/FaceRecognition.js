import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
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
    <Container>
      <div width="50%" style={{ position: 'absolute' }}>
        <img id="inputimage" height="auto" width="70%" src={imageUrl} />
        <BoundingBox
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            left: box.leftCol,
            right: box.rightCol,
          }}
        ></BoundingBox>
      </div>
    </Container>
  );
};

export default FaceRecognition;
