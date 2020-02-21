import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Login from "./components/Login";
import SingUp from "./components/Register";
import UserPage from "./containers/UserPage";
import PropertiesList from "./containers/PropertiesList";
import PropertyPage from "./containers/PropertyPage";
import Navigation from "./containers/Navigation";


class App extends Component {


    render () {
        return (
            <Switch>
                <Route  component = { UserPage } path = '/home' exact/>
                <Route  component = { Login } path = '/login' exact/>
                <Route  component = { SingUp } path = '/register' exact/>
                <Route  component = { PropertiesList } path = '/properties' exact/>
                <Route  component = { PropertyPage } path = '/properties/:id' exact/>
                {/*<Redirect to= '/home'/>*/}
            </Switch>
        );
    }
}



export default withRouter(App);
