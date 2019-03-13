import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.competency}</td>
                <td>{this.props.contact}</td>
                <td>{this.props.email}</td>
            </tr>
        )
    }
}

export default User;

