import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="about-section section">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                        <div className="heading">
                            <h3><b>About me</b></h3>
                            <h6 className="font-lite-black"><b>Who Am I</b></h6>
                        </div>
                        </div>{/* col-sm-3 */}
                        <div className="col-sm-12 col-md-9">
                        <p className="margin-b-50">A Fullstack Web developer with over 2 years experience 
                        in software development. A very Fast learner with good problem solving skill. 
                        Technically competent and industry aware.</p>
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="radial-prog-area margin-b-30">
                                <div className="radial-progress" data-prog-percent=".97">
                                <div />
                                <h6 className="progress-title">JAVASCRIPT</h6>
                                </div>
                            </div>{/* radial-prog-area*/}
                            </div>{/* col-sm-6*/}
                            <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="radial-prog-area margin-b-30">
                                <div className="radial-progress" data-prog-percent=".78">
                                <div />
                                <h6 className="progress-title">PHP</h6>
                                </div>
                            </div>{/* radial-prog-area*/}
                            </div>{/* col-sm-6*/}
                            <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="radial-prog-area margin-b-30">
                                <div className="radial-progress" data-prog-percent=".67">
                                <div />
                                <h6 className="progress-title">NODE.JS</h6>
                                </div>
                            </div>{/* radial-prog-area*/}
                            </div>{/* col-sm-6*/}
                            <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="radial-prog-area margin-b-50">
                                <div className="radial-progress" data-prog-percent=".97">
                                <div />
                                <h6 className="progress-title">REACT</h6>
                                </div>
                            </div>{/* radial-prog-area*/}
                            </div>{/* col-sm-6*/}
                        </div>{/* row */}
                        </div>{/* col-sm-9 */}
                    </div>{/* row */}
                    </div>{/* container */}
                </section>{/* about-section */}
            </div>
        );
    }
}