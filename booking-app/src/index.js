import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import store, { history } from './redux/store';

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
