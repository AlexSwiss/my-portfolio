import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <div>
                <footer>
                    <p className="copyright">
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This Site was built with <i className="ion-heart" aria-hidden="true" /> and <a href="https://colorlib.com" target="_blank">Coffee</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                </footer>
            </div>
        );
    }
}