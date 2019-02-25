import React, { PureComponent} from 'react';

import './stylesheet/style.scss';
import Header from '../CommonComponents/Header';
import Main from './Main';
import Footer from '../CommonComponents/Footer';
import {BrowserRouter as Router} from "react-router-dom";

class HomeScreen extends PureComponent {
    render() {
        return (
            <div className="container">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default HomeScreen;
