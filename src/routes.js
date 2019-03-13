import React from 'react';
import { Route } from 'react-router-dom';

import About from './HomeScreen/Main/About';
import Contact from './HomeScreen/Main/Contact';
import EmployeeDetails from './HomeScreen/Main/EmployeeDetails';
import Message from './HomeScreen/Main/Message';

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Message} />
            <Route path="/about" component={About} />
            <Route path="/employee_details" component={EmployeeDetails} />
            <Route path="/contact" component={Contact} />
        </div>
    )
};

export default Routes;
