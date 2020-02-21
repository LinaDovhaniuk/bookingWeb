import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';

import store, { history as browserHistory } from './redux/store';

const history = syncHistoryWithStore(browserHistory, store)

const theme = createMuiTheme({});

ReactDOM.render(
    <Provider store = { store }>
        <ThemeProvider theme = { theme }>
            <Router history = { history }>
                <App />
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
