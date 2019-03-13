import React, { Component } from 'react';

import Routes from '../../routes';

class Main extends Component {
    render() {
        return(
            <div className="information-container">
                <div className="wrapper">
                    <Routes />
                </div>
            </div>
        );
    }
}

export default Main;
