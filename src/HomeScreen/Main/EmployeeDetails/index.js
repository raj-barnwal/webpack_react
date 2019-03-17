import React, {Component} from 'react';

import User from './User';
import data from './usersData';

class EmployeeDetails extends Component {

    deleteEmpDetailsHandler = () => {
        console.log("abc");
        // const userDetails = [...this.state.data];
        // userDetails.slice(employeeIndex,1);
        // this.setState({data:userDetails});
    };

    render() {
        const userDetails = data.map(user => (
            <User key={user.si}
                  id={user.id}
                  name={user.name}
                  competency={user.competency}
                  contact={user.contact} email={user.email}
                  deleteEmpInfo={this.deleteEmpDetailsHandler}
            />
        ));

        return (
            <div>
                <div className="inner-heading">
                    Employee Information
                </div>
                <div className="user-info-card">
                    {userDetails}
                </div>
            </div>
        )
    }
}

export default EmployeeDetails;

