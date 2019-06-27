import React, { Component } from 'react';

export default class Education extends Component {
    render() {
        return(
            <div>
                <section className="education-section section">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                        <div className="heading">
                            <h3><b>Education</b></h3>
                            <h6 className="font-lite-black"><b>ACADEMIC CAREER</b></h6>
                        </div>
                        </div>{/* col-sm-3 */}
                        <div className="col-sm-12 col-md-9">
                        <div className="education-wrapper">
                            <div className="education margin-b-50">
                            <h4><b>BACHELOR DEGREE IN SCIENCE</b></h4>
                            <h5 className="font-yellow"><b>UAM - Physics</b></h5>
                            <h6 className="font-lite-black margin-t-10">GRADUATED IN MAY 2017 (2 YEARS)</h6>
                            
                            </div>{/* education */}
                            <div className="education margin-b-50">
                            <h4><b>UDEMY COURSE</b></h4>
                            <h5 className="font-yellow"><b>React-Redux Crash Course</b></h5>
                            <h6 className="font-lite-black margin-t-10">GRADUATED IN OCT 2009 (4 MONTHS)</h6>
                            
                            </div>{/* education */}
                            <div className="education margin-b-50">
                            <h4><b>TRAVERSY MEDIA - UDEMY COURSE</b></h4>
                            <h5 className="font-yellow"><b>Learn The MERN Stack</b></h5>
                            <h6 className="font-lite-black margin-t-10">GRADUATED IN JUL 2017 (3 MONTHS)</h6>
                            
                            </div>{/* education */}
                            <div className="education margin-b-50">
                            <h4><b>UDEMY COURSE</b></h4>
                            <h5 className="font-yellow"><b>Deep Dive Into React</b></h5>
                            <h6 className="font-lite-black margin-t-10">GRADUATED IN MAY 2017 (3 MONTHS)</h6>
                            
                            </div>{/* education */}
                        </div>{/* education-wrapper */}
                        </div>{/* col-sm-9 */}
                    </div>{/* row */}
                    </div>{/* container */}
                </section>{/* education-section */}
            </div>
        );
    }
}