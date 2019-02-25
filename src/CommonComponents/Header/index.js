import React, { PureComponent} from 'react';

import Topnav from './Topnav';

class Header extends PureComponent {
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

export default Header;
