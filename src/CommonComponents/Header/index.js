import React from 'react';
import {Link} from 'react-router-dom';

import TopNav from './TopNav';

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="logo-box">
                    <Link to="/">
                        <i className="logo" />
                    </Link>
                </div>
                <TopNav />
            </div>
        </div>
    );
}

export default Header;
