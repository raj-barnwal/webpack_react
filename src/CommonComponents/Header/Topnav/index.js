import React from 'react';
import { Link } from 'react-router-dom';

const Topnav = () => {
    return (
            <nav>
                <ul className="top-nav">
                    <li className="nav-option">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="nav-option">
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-option">
                        <Link to="/employee_details">EMPLOYEE DETAILS</Link>
                    </li>
                    <li className="nav-option">
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default Topnav;
