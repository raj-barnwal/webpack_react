import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import Topnav from './Topnav';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="logo-box">
                        <Link to="/"><i className="logo" /></Link>
                    </div>
                    <Topnav />
                </div>
            </div>
        );
    }
}

export default Header;
