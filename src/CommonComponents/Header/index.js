import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';

import Topnav from './Topnav';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="logo-box">
                        <i className="logo" />
                    </div>
                    <Topnav />
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
