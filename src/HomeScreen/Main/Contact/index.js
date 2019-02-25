import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div className="contact-info">
                <div>
                    M: +91-8527884743
                </div>
                <div>
                    @: contact@info.com
                </div>
            </div>
        )
    }
}

export default withRouter(Contact);

