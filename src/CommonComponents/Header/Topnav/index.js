import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Topnav = () => {
    return (
        <Router>
            <nav>
                <ul className="top-nav">
                    <li className="nav-option">
                        <NavLink to="/index" activeClassName="active">HOME</NavLink>
                    </li>
                    <li className="nav-option">
                        <NavLink to="/about" activeClassName="active">ABOUT</NavLink>
                    </li>
                    <li className="nav-option">
                        <NavLink to="/employee_details" activeClassName="active">EMPLOYEE DETAILS</NavLink>
                    </li>
                    <li className="nav-option">
                        <NavLink to="/contact" activeClassName="active">CONTACT</NavLink>
                    </li>
                </ul>
            </nav>
        </Router>
    );
};

export default Topnav;
