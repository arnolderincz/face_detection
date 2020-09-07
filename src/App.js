import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImgLink/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particle_params = {
  particles: {
    number:{
      value:204,
      density:{
        enable: true,
        value_area: 1000
      },
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
    }
  }
}

class App extends Component{
  render(){
    return(
      <div className="App">
        <Particles className="particles"  params={particle_params}/>
        <Navigation/>
        <Logo/>
        <Rank/>

        <ImageLinkForm/>
        
       {/*<FaceRecognition/>*/}
        
      </div>
    )
  }
}

export default App;
