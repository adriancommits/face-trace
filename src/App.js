import React, { Component } from 'react';
import Navigation from './components/Navigation.js';
import Rank from './components/Rank.js';
import ImageInputForm from './components/ImageInputForm.js';
import FaceRecognition from './components/FaceRecognition.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import styled from 'styled-components';
import SignInForm from './components/SignInForm.js';
import RegistrationForm from './components/RegistrationForm.js';

const AppWrapper = styled.div`
  text-align: center;
`;

const ParticlesWrapper = styled(Particles)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const app = new Clarifai.App({ apiKey: '7008eee28f0040098f61cf606569b149' });

class App extends Component {
  state = {
    input: '',
    box: {},
    route: 'signIn',
  };

  calculateFaceLocation = (data) => {
    const clarifaiFaceOutput =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log('Position of the detected face(s):', clarifaiFaceOutput);

    // calculate the pixels with the given percentage and the width and height of the image
    // get the image from the dom
    const uploadedImage = document.getElementById('inputimage');
    const width = uploadedImage.width;
    const height = uploadedImage.height;
    console.log('width and height of image is:', width, height);

    console.log(
      'A box is drawn in relation to the parent of those values. The calculation is referring to the original image. that is problematic, since it has to be accounted for',
    );

    // return the calculated values
    return {
      leftCol: clarifaiFaceOutput.left_col * width,
      rightCol: width - clarifaiFaceOutput.right_col * width,
      topRow: clarifaiFaceOutput.top_row * height,
      bottomRow: height - clarifaiFaceOutput.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log('displayfacebox box is: ', box);
    this.setState({ box: box });
  };

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

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    return (
      <AppWrapper>
        <ParticlesWrapper />
        <Navigation onRouteChange={this.onRouteChange} />
        <h1>Welcome To Facetrace</h1>

        {this.state.route === 'signIn' ? (
          <SignInForm onRouteChange={this.onRouteChange} />
        ) : (
          <>
            <Rank />
            <ImageInputForm
              onInputChange={this.onInputChange}
              onDetectClicked={this.detectFaces}
            />
            <FaceRecognition box={this.state.box} imageUrl={this.state.input} />
          </>
        )}
      </AppWrapper>
    );
  }
}

export default App;
