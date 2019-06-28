import React, { Component } from 'react';

export default class Intro extends Component {
    render() {
        return (
            <div>
                <section className="intro-section">
                <div className="container">
                    <div className="heading-wrapper">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="info">
                            <i className="icon ion-ios-location-outline" />
                            <div className="right-area">
                            <h5>Kaduna State</h5>
                            <h5>Nigeria</h5>
                            </div>{/* right-area */}
                        </div>{/* info */}
                        </div>{/* col-sm-4 */}
                        <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="info">
                            <i className="icon ion-ios-telephone-outline" />
                            <div className="right-area">
                            <h5>+234 8182432388</h5>
                            </div>{/* right-area */}
                        </div>{/* info */}
                        </div>{/* col-sm-4 */}
                        <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="info">
                            <i className="icon ion-ios-chatboxes-outline" />
                            <div className="right-area">
                            <h5>alexyikeh@gmail.com</h5>
                            </div>{/* right-area */}
                        </div>{/* info */}
                        </div>{/* col-sm-4 */}
                    </div>{/* row */}
                    </div>{/* heading-wrapper */}
                    <div className="intro">
                    <div className="row">
                        <div className="col-sm-8 col-md-4 col-lg-3">
                        <div className="profile-img margin-b-30"><img src="images/profile-1-250x250.jpg" alt /></div>
                        </div>{/* col-sm-8 */}
                        <div className="col-sm-10 col-md-5 col-lg-6">		
                        <h2><b>Alexander Ikeh</b></h2>
                        <h4 className="font-yellow">Software Developer</h4>
                        <ul className="information margin-tb-30">
                            <li><b className="font-yellow">BORN</b> : November 1, 1994</li>
                            <li><b className="font-yellow">EMAIL</b> : alexyikeh@gmail.com</li>
                        </ul>
                        <ul className="social-icons">
                            <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                            <li><a href="https://facebook.com/alexswiss0"><i className="ion-social-facebook" /></a></li>
                            <li><a href="https://twitter.com/CodedFingers"><i className="ion-social-twitter" /></a></li>
                        </ul>
                        </div>{/* col-sm-8 */}
                        <div className="col-sm-10 col-md-3 col-lg-3">
                        <a className="downlad-btn" href="https://drive.google.com/open?id=1f025BGGD7vkhVVeYIE8qCiD2NsDXivsw">Download CV</a>
                        </div>{/* col-lg-2 */}
                    </div>{/* row */}
                    </div>{/* intro */}
                </div>{/* container */}
                </section>
            </div>
          );
    }
}