import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class About extends Component {
    render() {
        console.log("Hi...");
        return (
            <div>
                Accusantium culpa distinctio fuga harum hic ipsam ipsum maiores nam neque nihil non obcaecati, perspiciatis quasi quod reprehenderit unde vel vero voluptatem.
            </div>
        )
    }
}

export default withRouter(About);

