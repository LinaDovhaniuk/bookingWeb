import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Login from "./components/Login";
import SingUp from "./components/Register";
import Confirm from "./components/Confirmation";
import UserPage from "./containers/UserPage";
import PropertiesList from "./containers/PropertiesList";
import PropertyPage from "./containers/PropertyPage";

import Navigation from "./containers/Navigation";
import Box from "@material-ui/core/Box";


class App extends Component {

    render () {
        const username = 'username';

        return (
            <Box>
                <Navigation/>
                <Switch>
                    <Route exact component = { Login } path = '/login' />
                    <Route exact component = { SingUp } path = '/register' />
                    <Route exact component = { Confirm } path = '/confirm' />
                    <Route exact component = { UserPage } path = {`/${username}`} />
                    <Route exact component = { PropertiesList } path = '/properties' />
                    <Route exact component = { PropertyPage } path = '/properties/:id' />
                    <Redirect to= '/properties'/>
                </Switch>
            </Box>
        );
    }
}



export default withRouter(App);
