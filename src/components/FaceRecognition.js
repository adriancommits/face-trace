import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const BoundingBox = styled.div`
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
`;

const Image = styled.img`
  height: auto;
  max-height: 60vh;
  max-width: 60hh;
`;

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <Container>
      <div width="50%" style={{ position: 'absolute' }}>
        <Image id="inputimage" src={imageUrl} />
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
