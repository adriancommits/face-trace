import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageInputForm from './components/ImageInputForm/ImageInputForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import './App.css';

const app = new Clarifai.App({ apiKey: '7008eee28f0040098f61cf606569b149' });

class App extends Component {
  state = {
    input: '',
    box: {},
  };

  calculateFaceLocation = (data) => {
    const clarifaiFaceOutput = 
      data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log("Position of the detected face(s):", clarifaiFaceOutput);
    
    // calculate the pixels with the given percentage and the width and height of the image    
    // get the image from the dom 
    const uploadedImage = document.getElementById("inputimage");
    const width = uploadedImage.width;
    const height = uploadedImage.height;
    console.log("width and height of image is:", width, height);

    console.log("A box is drawn in relation to the parent of those values. The calculation is referring to the original image. that is problematic, since it has to be accounted for");

    // return the calculated values
    return {
      leftCol: clarifaiFaceOutput.left_col * width,
      rightCol: width - (clarifaiFaceOutput.right_col * width),
      topRow: clarifaiFaceOutput.top_row * height,
      bottomRow: height - clarifaiFaceOutput.bottom_row * height
    }
  }

  displayFaceBox = (box) => {
    console.log("displayfacebox box is: ", box);
    this.setState( { box: box } );
  }

  onInputChange = (event) => {
    const input = event.target.value;
    this.setState({ input });
  };

  detectFaces = async () => {
    try {
      const response = await app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input,
      );
      this.displayFaceBox(this.calculateFaceLocation(response));
    } catch (error) {
      console.log('there was an error', error);
    }
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" />
        <Navigation />
        <h1>Welcome To Facetrace</h1>
        <Rank />
        <ImageInputForm
          onInputChange={this.onInputChange}
          onDetectClicked={this.detectFaces}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.input} />
      </div>
    );
  }
}

export default App;
