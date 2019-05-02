import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import './App.css';
import Banner from './components/Banner';
import Background from './img/bg-img.jpg';
import About from './components/About';
import Projects from './components/Projects';


const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '100vh',
    backgroundSize: 'cover'
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={myStyles}>
        <AppNavbar/>
        <Banner/>
        <About/>
        <Projects />
        </div>
      </div>
    );
  }
}

export default App;
