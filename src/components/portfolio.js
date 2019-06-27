import React, { Component } from 'react';

export default class Portfolio extends Component {
    render () {
        return (
            <div>
                <section className="portfolio-section section">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                        <div className="heading">
                            <h3><b>Portfolio</b></h3>
                            <h6 className="font-lite-black">MY WORK</h6>
                        </div>
                        </div>{/* col-sm-3 */}
                        <div className="col-sm-12 col-md-9">
                        </div>{/* col-sm-8 */}
                    </div>{/* row */}
                    <div className="portfolioContainer  margin-b-50">
                        <div className="p-item web-design">
                        <a href="https://shoppinverse.herokuapp.com" data-fluidbox>
                            <img src="images/portfolio-15-400x400.jpg" /></a>
                            <h6 class="font-yellow">https://shoppinverse.herokuapp.com</h6>

                        </div>{/* p-item */}
                        <div className="p-item branding graphic-design">
                        <a href="https://getcloudy.herokuapp.com" data-fluidbox>
                            <img src="images/portfolio-15-400x400.jpg" /></a>
                            <h5 class="font-yellow">https://getcloudy.herokuapp.com</h5>

                        </div>{/* p-item */}
                        <div className="p-item web-design">
                        <a href="https://sdiseminars.com" data-fluidbox>
                            <img src="images/portfolio-15-400x400.jpg" /></a>
                            <h5 class="font-yellow">https://sdiseminars.com</h5>
                        </div>{/* p-item */}
                        <div className="p-item graphic-design">
                        <a className="img" href="https://demebrands.com" data-fluidbox>
                            <img src="images/portfolio-15-400x400.jpg" /></a>
                            <h5 class="font-yellow">https://demebrands.com</h5>

                        </div>{/* p-item */}
                        <div className="p-item branding graphic-design">
                        <a href="https://globalacquisition.com" data-fluidbox>
                            <img src="images/portfolio-15-400x400.jpg" /></a>
                            <h5 class="font-yellow">https://globalacquisition.com</h5>
                        </div>{/* p-item */}
                    </div>{/* portfolioContainer */}
                    </div>{/* container */}
                </section>{/* portfolio-section */}
            </div>
        );
    }
}