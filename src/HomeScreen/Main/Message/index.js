import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Message extends Component {
    render() {
        return (
            <div>
                Default Page
            </div>
        )
    }
}

export default withRouter(Message);

