import React, { Component} from 'react';
import Background from '../img/bg-img.jpg';
import Typist from 'react-typist'; 
import './Banner.css';


const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '100vh',
    backgroundSize: 'cover'
}

class Banner extends Component {

  render() {
    return (
      <div>
      <header style={myStyles}>
        <h1>I am Alexander</h1>
        <Typist className="MyTypist">
                <span> Web Developer</span>
                <Typist.Backspace count={15} delay={400} />
                <span> MERN Stack</span>
                <Typist.Backspace count={11} delay={400} />
                <span> Fullstack Developer</span>
                <Typist.Backspace count={20} delay={400} />
                <span> PHP Developer</span>
                <Typist.Backspace count={13} delay={400} />
                <span> Web Developer</span>
                <Typist.Backspace count={15} delay={400} />
                <span> MERN Stack</span>
                <Typist.Backspace count={11} delay={400} />
                <span> Fullstack Developer</span>
                <Typist.Backspace count={20} delay={400} />
                <span> PHP Developer</span>
                <Typist.Backspace count={13} delay={400} />
                <span> Web Developer</span>
                <Typist.Backspace count={15} delay={400} />
                <span> MERN Stack</span>
                <Typist.Backspace count={11} delay={400} />
                <span> Fullstack Developer</span>
                <Typist.Backspace count={20} delay={400} />
                <span> Web Developer</span>
        </Typist>
      </header>
       
      </div>
    );
  }
}

export default Banner;