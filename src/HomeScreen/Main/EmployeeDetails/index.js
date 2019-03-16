import React, {Component} from 'react';

import User from './User';
import data from './usersData';

class EmployeeDetails extends Component {
    render() {

        const userDetails = data.map((user => (
            <User key={user.si}
                  id={user.id}
                  name={user.name}
                  competency={user.competency}
                  contact={user.contact} email={user.email} />
        )));

        return (
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
                <tbody>
                {userDetails}
                </tbody>
            </table>

        )
    }
}

export default EmployeeDetails;

