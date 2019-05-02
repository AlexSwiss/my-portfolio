import React, { Component} from 'react';
import { Container, Row, Col, Progress } from 'reactstrap';
import './About.css';


const profile = require('../img/profile.jpg');


class About extends Component {
    render() {
      return (
          <div className="About">
        <Container>

          <Row>
            <Col xs="6">
                <Row>
                    <span>
                        <Col>
                            <img src={profile} />
                        </Col>
                    </span>
                    <span>
                        <Col>
                            <p>
                                <span><h5>Name:</h5>Alexander Ikeh</span>
                            </p>
                            <p>
                                <h5>Profile:</h5> Full Stack Developer
                            </p>
                            <p>
                                <h5>Email:</h5> alexyikeh@gmail.com
                            </p>
                            <p>
                                <h5>Phone:</h5> +234 8182432388
                            </p>
                        </Col>
                    </span>
                </Row>

               
                <div>
                    <div className="text-left">JAVASCRIPT</div><div className="text-right">85%</div>
                    <Progress value={85}/>
                    <div className="text-left">PHP</div><div className="text-right">80%</div>
                    <Progress value={80} />
                    <div className="text-left">NODE.JS</div><div className="text-right">60%</div>
                    <Progress value={60} />
                    <div className="text-left">REACT</div><div className="text-right">65%</div>
                    <Progress value={65} />
                    <div className="text-left">HTML</div><div className="text-right">90%</div>
                    <Progress value={90} />   
                </div>
                

            </Col>
            <Col xs="6">
                <h2>About Me</h2>
                <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.

                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.

                    Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                </p>
            
            </Col>
          </Row>
         
        </Container>
        </div>
      );
    }
  }

export default About;