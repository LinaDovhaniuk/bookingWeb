import {withRouter} from "react-router";
import {NavLink} from "react-router-dom";
import { history } from '../redux/store';
import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import {Form, Field} from 'react-final-form';
import TextField from "@material-ui/core/TextField";

import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import {loginUserSuccess} from "../redux/actions";
import {setUserTypeSuccess} from "../redux/actions";
import Amplify, {Auth} from "aws-amplify";

const loginStyles = () => ({
    rootContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        fontFamily: 'Montserrat',
        paddingTop: '70px'
    },
    container: {
        margin: 10,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        margin: 8,
        width: '100%',
        color: '#39A298',
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ' & > * ': {
            margin: 5,
        },
    },
    btn: {
        margin: 3,
        backgroundColor: '#39A298',
    },
    link: {
        color: '#39A298',
        textDecoration: 'none',
    },
    card: {
        width: 450,
        padding: 15,
    }

});

class Login extends Component {
     onSubmit =  async (values) => {
         console.log(values);
         if(values.userType=="User") {
             Amplify.configure({
                 Auth: {
                     region: 'eu-central-1',
                     userPoolId: 'eu-central-1_sXobUjqVh',
                     userPoolWebClientId: '5vpqdi2hlkvqjsjqd3gsama9c8',
                     //redirectUrl: 'http://localhost:3000',
                 }
             });
         }
         else {
             Amplify.configure({
                 Auth: {
                     region: 'eu-central-1',
                     userPoolId: 'eu-central-1_pPGEanitH',
                     userPoolWebClientId: '4o98dleg8r6uqi1g09ctoua1cg',
                     //redirectUrl: 'http://localhost:3000',
                 }
             });
         }
        const authUser = await Auth.signIn(values.email, values.password);
        console.log("authUser");
        console.log( await Auth.currentSession());
        const tocken= await Auth.currentSession();///hosts/profile
         var url = "";
         if(values.userType=="User")
         {
             url="https://api.booking.knine.xyz/customers/profile";
         }
         else
         {
             url="https://api.booking.knine.xyz/hosts/profile";
         }
         const response = await fetch (
             url,
             {
                 headers: {
                     'Authorization': 'Bearer ' + tocken.idToken.jwtToken,
                 },
                 method: 'GET'
             });
         const userInfo=(await response.json());
        // console.log( userInfo);
         //console.log( await response.json().username);
        // console.log( await response.json().PromiseValue);
        const { loginUserSuccess } = this.props;

        loginUserSuccess(userInfo);


        const { user } = this.props;
        console.log(user);
         const {setUserTypeSuccess} = this.props;
         setUserTypeSuccess({"userType":values.userType});
         const { type } = this.props;
        // console.log(type);
         history.replace(`/${user.username}`);
        //console.log('Send values to api/login');
    };

    render() {
         const { classes } = this.props;
        return (
            <div className={classes.rootContainer}>
                <Card className={classes.card}>
                    <Form
                        onSubmit={this.onSubmit}
                        render={({handleSubmit}) => (
                            <form className={classes.container} onSubmit={handleSubmit}>

                                <Field name='email'>
                                    {({input}) => (
                                        <TextField
                                            className={classes.item}
                                            label='Username'
                                            placeholder='Input text for a single line field'
                                            required
                                            {...input}
                                        />
                                    )}
                                </Field>
                                <Field name='password'>
                                    {({input, meta}) => (
                                        <TextField
                                            className={classes.item}
                                            name='password'
                                            label='Password'
                                            placeholder='Enter your password'
                                            required
                                            type='password'

                                            {...input}
                                        />
                                    )}
                                </Field>
                                <div className={classes.item}>
                                    { //<label  >User type </label>
                                    }
                                    <Field name="userType"   defaultValue={"User"} className={classes.item} component="select">
                                        <option value="Host">Host</option>
                                        <option value="User">User</option>
                                    </Field>
                                </div>
                                <Box className={classes.actions}>
                                    <Button
                                        className={classes.btn}
                                        color='primary'
                                        type='submit'
                                        variant='contained'
                                    >
                                        Sign in
                                    </Button>
                                    <NavLink className={classes.link} to='/register'>Don’t have any account yet? Sign
                                        up </NavLink>
                                </Box>
                            </form>

                        )}
                    />

                </Card>
            </div>

        );
    }
}


const mapStateToProps = ({userData : { user, type }}) => ({
    user,
    type,
});

export default compose(
    withStyles(loginStyles),
    connect(mapStateToProps, { loginUserSuccess, setUserTypeSuccess })
)(Login);
