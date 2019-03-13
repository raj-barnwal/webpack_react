import React, { Component} from 'react';

import './stylesheet/style.scss';
import Header from '../CommonComponents/Header';
import Main from './Main';
import Footer from '../CommonComponents/Footer';
import {withRouter} from "react-router-dom";

class HomeScreen extends Component {
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

export default withRouter(HomeScreen);
