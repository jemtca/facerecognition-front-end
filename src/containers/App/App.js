import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navigation from '../../components/Navigation/Navigation';
import Logo from '../../components/Logo/Logo';
import Rank from '../../components/Rank/Rank';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';
import './App.css';
import { particlesOptions } from '../../particlesOptions';

const initialState = {
  input: '',
  imageUrl: '',
  //box: {},
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  }
};

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
    }});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onPictureSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input,
      })
    })
      .then(response => response.json())
      .then(data => {
        if (Object.keys(data.outputs[0].data).length) { // check if the data object has regions key (array with faces) or not
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id,
              faces: data.outputs[0].data.regions.length // how many faces the picture submitted has
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(error => {
              console.log('onPictureSubmit:', error);
            });
        }
        this.displayFaceBox(this.calculateFaceLocation(data))
      })
      .catch(error => console.log('clarifai:', error));
  }

  calculateFaceLocation = (data) => {
    // const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    let arrayOfBoxes = [];

    if (Object.keys(data.outputs[0].data).length) { // check if the data object has regions key (array with faces) or not
      // console.log(data.outputs[0].data.regions[0].region_info.bounding_box);
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);
      
      arrayOfBoxes = data.outputs[0].data.regions.map((box) => {
        return {
        leftCol: box.region_info.bounding_box.left_col * width,
        topRow: box.region_info.bounding_box.top_row * height,
        rightCol: width - (box.region_info.bounding_box.right_col * width),
        bottomRow: height - (box.region_info.bounding_box.bottom_row * height),
        };
      });
    }

    return arrayOfBoxes;

    // return {
    //   leftCol: clarifaiFace.left_col * width,
    //   topRow: clarifaiFace.top_row * height,
    //   rightCol: width - (clarifaiFace.right_col * width),
    //   bottomRow: height - (clarifaiFace.bottom_row * height),
    // };

  }

  displayFaceBox = (boxes) => {
    // console.log(boxes);
    this.setState({boxes: boxes});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    }
    else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className='particles'
          init={ async (main) => await loadFull(main) }
          options={particlesOptions}
        />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        { // javascript expresion to evaluate the condition (ternary operator)
          this.state.route === 'home'
          ? <div>
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onPictureSubmit={this.onPictureSubmit}
              />
              <FaceRecognition
                imageUrl={this.state.imageUrl}
                boxes={this.state.boxes}
              />
            </div>
          : (
              this.state.route === 'register'
              ? <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
              : <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            )
        }
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;
