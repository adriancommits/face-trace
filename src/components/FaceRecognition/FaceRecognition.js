import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return( 
    <div width="100%" style={{position:"absolute"}}>
      <img id="inputimage" height="auto" src={imageUrl} />
      <div className='bounding-box' style={{top:box.topRow, bottom:box.bottomRow, left:box.leftCol, right:box.rightCol}}></div>
    </div>
  )};

export default FaceRecognition;
