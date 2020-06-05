import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Login from "./components/Login";
import SingUp from "./components/Register";
import Confirm from "./components/Confirmation";
import Bookings from "./components/Bookings";
import UserPage from "./containers/UserPage";
import PropertiesList from "./containers/PropertiesList";
import PropertyPage from "./containers/PropertyPage";
import Reservation  from "./components/Reservation";
import Navigation from "./containers/Navigation";
import PropertyAdding from "./components/PropertyAdding"
import Box from "@material-ui/core/Box";
import {loginUserSuccess, setUserTypeSuccess} from "./redux/actions";


class App extends Component {

    render () {
        const username = 'username';
        const { user } = this.props;
        const {type} =  this.props;
        return (
            <Box>
                <Navigation/>
                <Switch>
                    <Route exact component = { Login } path = '/login' />
                    <Route exact component = { SingUp } path = '/register' />
                    <Route exact component = { Confirm } path = '/confirm' />
                    <Route exact component = { UserPage } path = {`/${user.username}`} />
                    <Route exact component = { PropertiesList } path = '/properties' />
                    <Route exact component = { Reservation } path = '/reservation' />
                    <Route exact component = { Bookings } path = '/bookings' />
                    <Route exact component = { PropertyPage } path = '/properties/:id' />
                    <Route exact component = { PropertyAdding } path = '/propertyAdding' />
                    <Redirect to= '/properties'/>
                </Switch>
            </Box>
        );
    }
}

// const mapStateToProps = ({userData : { user }}) => ({
//     user,
// });
//
// export default withRouter(compose(
//     connect(mapStateToProps)
// )(App));
//
// export default withRouter(App);

const mapStateToProps = ({userData : { user, type }}) => ({
    user,
    type,
});

export default compose(
    connect(mapStateToProps, { loginUserSuccess, setUserTypeSuccess })
)(App);
