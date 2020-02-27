import {withRouter,} from "react-router";
import {NavLink} from "react-router-dom";

import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";
import {Field, Form} from "react-final-form";
import TextField from "@material-ui/core/TextField";

import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import {withStyles} from "@material-ui/styles";
import { history } from '../redux/store';

const registerStyles = () => ({
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
        width: '85%',
        color: '#39A298',
    },
    actions: {
        marginTop: 15,
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
    },
    helpInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ' & > div': {
            color: '#656565',
        }
    },

});

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password:'',
            repeatedPassword:''
        };
    }

    isNameValid = (name) => (/^[a-zA-Z]+$/).test(name) &&  name.length>2;


    isSurnameValid = (surname) => (/^[a-zA-Z]+$/).test(surname) &&  surname.length>2;


    isUsernameValid = (username) => (/^[a-zA-Z0-9_]+$/).test(username) && username.length>4;


    isEmailValid = (email) => (/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/).test(email);

    isPasswordValid = (password) => password.length>=6;
    isRepeatedPasswordValid = (password) => password===this.state.password && this.isPasswordValid(this.state.password);
    // handleEmailChange = ({ target: { value }}) => {
    //     this.setState({
    //         email: value,
    //     });
    // };
    //
    // isPasswordValid = (password) => password === this.state.repeatedPassword;


    //isDisabled = () => !(this.isNameValid(this.state.firstName) //&&
       // this.isSurnameValid(this.state.lastName) &&
       // this.isEmailValid(this.state.email) &&
      //  this.isUsernameValid(this.state.username)
    //);

    handleNameChange = evt => this.setState({ firstName: evt.target.value });
    handleLastNameChange = evt => this.setState({ lastName: evt.target.value });
    handleUsernameChange = evt => this.setState({ username: evt.target.value });
    handleEmailChange = evt => this.setState({ email: evt.target.value });
    handlePasswordChange = evt => this.setState({ password: evt.target.value });
    handleRepeatedPasswordChange = evt => this.setState({ repeatedPassword: evt.target.value });

    onSubmit = (values) => {
         history.replace('/username')
    };

    canBeSubmitted() {
        const {firstName, lastName, username, email,password, repeatedPassword } = this.state;


        return (
            this.isNameValid(firstName) &&
            this.isSurnameValid(lastName) &&
            this.isUsernameValid(username) &&
            this.isEmailValid(email) &&
            this.isPasswordValid(password) &&
            this.isRepeatedPasswordValid(repeatedPassword)
        );
    }

    handleSubmit = (evt) => {
        if (!this.canBeSubmitted()) {
            evt.preventDefault();
            return;
        }
        // actual submit logic...
    };

    render() {
        const { classes } = this.props;
        const isEnabled = this.canBeSubmitted(); //this.isNameValid(firstName);
        return (
            <div className={classes.rootContainer}>
                <Card className={classes.card}>
                    <div className={classes.helpInfo}>
                        <Typography variant='h6'> Create your account </Typography>
                        <div> Create an account to easily use Booking services.</div>
                    </div>

                    <Form
                        onSubmit={this.onSubmit}
                        render={({handleSubmit}) => (
                            <form className={classes.container} onSubmit={handleSubmit}>
                                <Field name='firstName'

                                    >
                                    {({input, meta}) => console.log(meta) || (
                                        <TextField
                                            error = {this.isNameValid(input)}
                                            helperText = 'Only letter available'
                                            className={classes.item}
                                            name='firstName'
                                            label='First name'
                                            placeholder='Input text for a single line field'
                                            required
                                            {...input}
                                        />
                                    )}
                                </Field>
                                <Field name='lastName'>
                                    {({input, meta}) => (
                                        <TextField
                                            error = {this.isSurnameValid(input)}
                                            helperText = 'Only letter available'
                                            className={classes.item}
                                            name='lastName'
                                            label='Last name'
                                            placeholder='Input text for a single line field'
                                            required
                                            {...input}
                                        />
                                    )}
                                </Field>
                                <Field name='username'>
                                    {({input, meta}) => (
                                        <TextField
                                            error = {this.isUsernameValid(input)}
                                            helperText = 'For example: User_name'
                                            className={classes.item}
                                            name='Username'
                                            label='Username'
                                            placeholder='Input text for a single line field'
                                            required
                                            {...input}
                                        />
                                    )}
                                </Field>
                                <Field name='email'>
                                    {({input, meta}) => (
                                        <TextField
                                            error = {this.isEmailValid(input)}
                                            helperText = 'For example: user.name@gmail.com'
                                            className={classes.item}
                                            label='Email'
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
                                            label='Password'
                                            placeholder='Enter your password'
                                            required
                                            type='password'
                                            {...input}
                                        />
                                    )}
                                </Field>
                                <Field name='repeatedPassword'>
                                    {({input, meta}) => (
                                        <TextField
                                            className={classes.item}
                                            label='Repeat your password'
                                            placeholder='Repeat your password'
                                            required
                                            type='password'
                                            {...input}
                                        />
                                    )}
                                </Field>

                                <Box className={classes.actions}>
                                    <Button
                                        disabled = {!isEnabled}
                                        className={classes.btn}
                                        color='primary'
                                        type='submit'
                                        variant='contained'>
                                        Sign up
                                    </Button>
                                    <NavLink className={classes.link} to='/login'>
                                        Already have an account. Sign in
                                    </NavLink>
                                </Box>
                            </form>
                        )}
                    />
                </Card>
            </div>


        )
    }
}

export default withStyles(registerStyles)(Register);
