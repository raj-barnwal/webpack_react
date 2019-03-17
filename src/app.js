import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

import HomeScreen from './HomeScreen';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <HomeScreen />
        </Router>
    </Provider>,
    document.getElementById('app')
);

