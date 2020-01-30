import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageInputForm from './components/ImageInputForm/ImageInputForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


import './App.css';

const app = new Clarifai.App({apiKey: '7008eee28f0040098f61cf606569b149'});

// console.log(response.outputs[0].data.regions[0].region_info.bounding_box);

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
    console.log("calculateFaceLocation", "doesnt get called right now.");
    const clarifaiFaceOutput = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFaceOutput);
  }

  onInputChange = (event) => {
    // this will be called by the ImageInputForm element whenever the input inside of that component changes
    // set state input to the value of the inputfield
    this.setState( {input: event.target.value} );
  }

  onDetectClicked = (event) => {
    // will be called by the ImageInputForm Component when the button is clicked
    this.setState(
      { imageUrl: this.state.input }, 
      () => { console.log("executed callback function of setState..", this.state.imageUrl ) }
      );
  
    // detect face with api
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
        .then(
          function(response) {
            console.log(response);
            console.log("this gets called. but the next line doesn't");
            this.calculateFaceLocation(); // @Alex: PROBLEM: THIS FUNCTION IS NOT EXECUTED OR SOMETHINGS WRONG WITH IT.
            // probably some scope issue with "this" or something i dont know
          }, 
        function(err) {
          console.log("there was an error", err);
          // there was an error
        }
      );  
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"/>
        <Navigation />
        <h1>Welcome To Facetrace</h1>
        <Rank />
        <ImageInputForm onInputChange={this.onInputChange} onDetectClicked={this.onDetectClicked}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
