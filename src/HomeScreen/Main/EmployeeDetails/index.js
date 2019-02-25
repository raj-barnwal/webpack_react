import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class EmployeeDetails extends Component {
    render() {
        return (
            <div>
                <table className="emp-table">
                    <thead>
                    <tr>
                        <th>Id.</th>
                        <th>Name</th>
                        <th>Competency</th>
                        <th>Contact</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default withRouter(EmployeeDetails);
