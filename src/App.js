import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Intro from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import Portfolio from './components/portfolio';
import Education from './components/education';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
        <div>
          <Intro />
          <About />
          <Experience />
          <Portfolio />
          <Education />
          <Footer />
        </div>
    );
  }
}

export default App;
