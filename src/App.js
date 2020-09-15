import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImgLink/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Home from './components/Home/Home';



const app = new Clarifai.App({
  apiKey: 'b7c71470c62f4a82be638ae9dc924ced'
 });



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
  constructor(){
    super();
    this.state = {
      input: '',
      imgUrl:'',
      box:{},
      route: 'signIn',
      isSignedIn: false,
      user:{
        id: '',
        name: '',
        email:'',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) =>{
    this.setState({user:{
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  faceLocation = (data) =>{
    const faceData = data.outputs[0].data.regions[0].region_info.bounding_box;
    
    const image = document.getElementById('inputImg');
    const width = Number(image.width);
    const height= Number(image.height);
    return{
      leftCol: faceData.left_col * width,
      topRow: faceData.top_row * height,
      bottomRow: height - (faceData.bottom_row * height),
      rightCol: width - (faceData.right_col * width)
    }
  }

  displayFaceBox = (box) =>{
    this.setState({box:box})
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onBtnSubmit =() =>{
    this.setState({imgUrl:this.state.input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, 
    this.state.input)
    .then(response =>{
      if(response){
        fetch('http://localhost:3001/image',{
          method:'put',
          headers:{'Content-Type' : 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count =>{
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
      }
      console.log(this.state.user.name)
      this.displayFaceBox(this.faceLocation(response));
    })
    .catch(err =>{
      console.log(err);
    })
  }

  onRouteChange = (route) =>{
    this.setState({route: route});
  }

  render(){
    return(
      <div className="App">
        <Particles className="particles"  params={particle_params}/>
        
        {(this.state.route === 'signIn') 
        ?
          <div>
            <Logo/>
            <SignIn 
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}/>
          </div>
        : (this.state.route === 'home'
          ?
          <div>
            <div className='inLine'>
              <Logo/>
              <Navigation onRouteChange={this.onRouteChange}/>
            </div>
            <Rank name={this.state.user.name} 
            entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit}/>          
            <FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl}/>
          </div>
          :
          <div>
            <div className='inLine'>
              <Logo/>
              <Home onRouteChange={this.onRouteChange}/>
            </div>
            <Register 
            loadUser = {this.loadUser}
            onRouteChange={this.onRouteChange}/>
          </div>
        )}    
      </div>
    )
  }
}

export default App;
