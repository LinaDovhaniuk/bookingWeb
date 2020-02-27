import {withRouter,} from "react-router";
import {NavLink} from "react-router-dom";

import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";
import {Field, Form} from "react-final-form";
import TextField from "@material-ui/core/TextField";
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

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
        };
    }

    isNameValid = (name) => {
        if (!name) {
            return  'Please enter your first name';
        }
        if (!(/^[a-zA-Z]+$/).test(name)) {
            return 'Only letters are allowed';
        }
        if (name.length > 25) {
            return 'Too long input (max size 25)';
        }
    };

    isSurnameValid = (surname) => {
        if (!surname) {
            return  'Please enter your last name';
        }
        if (!(/^[a-zA-Z]+$/).test(surname)) {
            return 'Only letters are allowed';
        }
        if (surname.length > 25) {
            return 'Too long input (max size 25)';
        }
    };

    isUsernameValid = (username) => {
        if (!username) {
            return  'Please enter your username';
        }
        if (!(/^[a-zA-Z0-9_]+$/).test(username)) {
            return 'Only letters are allowed';
        }
        if (username.length > 25) {
            return 'Too long input (max size 25)';
        }
    };

    isEmailValid = (email) => {
        if (!email) {
            return  'Please enter you email: e.g user@gmail.com';
        }
        if (!(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/).test(email)) {
            return 'e.g user@gmail.com';
        }
        if (email.length > 25) {
            return 'Too long input (max size 45)';
        }
    };

    isPasswordValid = (password) => {
        if (!password) {
            return  'Please enter your password';
        }
        if (password.length < 6) {
            return 'Password is too short (min size 6)';
        }
    };

    isRepeatedPasswordValid = (repeatedPassword, values) => {
        if (!repeatedPassword) {
            return  'Please repeat your password';
        }
        if(repeatedPassword.length < 6) {
            return 'Password is too short (min size 6)';
        }
        if (repeatedPassword !== values.password) {
            return 'Password does not match';
        }
    };




    onSubmit = async (values) => {

        history.replace('/username')
    };


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.rootContainer}>
                <Card className={classes.card}>
                    <div className={classes.helpInfo}>
                        <Typography variant='h6'> Create your account </Typography>
                        <div> Create an account to easily use Booking services.</div>
                    </div>

                    <Form
                        onSubmit={this.onSubmit}
                        render={({handleSubmit, invalid, ...data}) => console.log(data.submitting) || (
                            <form className={classes.container} onSubmit={handleSubmit}>
                                <Field name='firstName'
                                       validate = {this.isNameValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';
                                        return (
                                            <TextField
                                                error = {!!error}
                                                helperText = {error}
                                                className={classes.item}
                                                name='firstName'
                                                label='First name'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )
                                    }}
                                </Field>
                                <Field name='lastName'
                                       validate = {this.isSurnameValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';
                                        return (
                                            <TextField
                                                error = {!!error}
                                                helperText = {error}
                                                className={classes.item}
                                                name='lastName'
                                                label='Last name'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )}
                                    }
                                </Field>
                                <Field name='username'
                                       validate = {this.isUsernameValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error = {!!error}
                                                helperText = {error}
                                                className={classes.item}
                                                name='Username'
                                                label='Username'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )}
                                    }

                                </Field>
                                <Field name='email'
                                       validate = {this.isEmailValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';
                                        return (
                                            <TextField
                                                error = {!!error}
                                                helperText = {error}
                                                className={classes.item}
                                                label='Email'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )}
                                    }

                                </Field>
                                <Field name='password'
                                       validate = {this.isPasswordValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error = {!!error}
                                                helperText = {error}
                                                className={classes.item}
                                                label='Password'
                                                placeholder='Enter your password'
                                                required
                                                type='password'
                                                {...input}
                                            />
                                        )}
                                    }

                                </Field>
                                <Field name='repeatedPassword'
                                    validate = {this.isRepeatedPasswordValid}
                                >
                                    {({input, meta}) =>  {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';
                                        return (
                                            <TextField
                                                error = {!!error}
                                                helperText = {error}
                                                className={classes.item}
                                                label='Repeat your password'
                                                placeholder='Repeat your password'
                                                required
                                                type='password'
                                                {...input}
                                            />
                                        )}
                                    }

                                </Field>

                                <Box className={classes.actions}>
                                    <Button
                                        disabled = {invalid}
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

