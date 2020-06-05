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
import awsconfig from './amf_config';
import Amplify, {Auth} from 'aws-amplify';
import {history} from '../redux/store';
import Avatar from "@material-ui/core/Avatar";
// import {reduxForm, change} from 'redux-form';
// import {connect} from 'react-redux';

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
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            userType: false
        };
    }

    isNameValid = (name) => {
        if (!name) {
            return 'Please enter your first name';
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
            return 'Please enter your last name';
        }
        if (!(/^[a-zA-Z]+$/).test(surname)) {
            return 'Only letters are allowed';
        }
        if (surname.length > 25) {
            return 'Too long input (max size 25)';
        }
    };

    isUsernameValid = (username) => {
        this.setState({
            'usename': username,
        });
        if (!username) {
            return 'Please enter value';
        }
        if (!(/^[a-zA-Z0-9_]+$/).test(username)) {
            return 'Only letters are allowed';
        }
        if (username.length > 25) {
            return 'Too long input (max size 25)';
        }
    };
    isUserTypeValid = (userType) => {
        this.setState({
            'userType': userType
        });
    };

    isEmailValid = (email) => {
        this.setState({
            'email': email
        })
        if (!email) {
            return 'Please enter you email: e.g user@gmail.com';
        }
        if (!(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/).test(email)) {
            return 'e.g user@gmail.com';
        }
        if (email.length > 25) {
            return 'Too long input (max size 45)';
        }

        // console.log(this.state);
    };

    isPasswordValid = (password) => {
        if (!password) {
            return 'Please enter your password';
        }
        if (password.length < 6) {
            return 'Password is too short (min size 6)';
        }
        // if(!(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/).test(password))
        // {
        //     return 'invalid password format (you need to have at least 1 capital letter, 1 special symbol, 1 digit)';
        // }
    };

    isRepeatedPasswordValid = (repeatedPassword, values) => {
        if (!repeatedPassword) {
            return 'Please repeat your password';
        }
        if (repeatedPassword.length < 6) {
            return 'Password is too short (min size 6)';
        }
        if (repeatedPassword !== values.password) {
            return 'Password does not match';
        }
    };

    registerUser = () => {

        Amplify.configure({
            Auth: {
                region: 'eu-central-1',
                userPoolId: 'eu-central-1_sXobUjqVh',
                userPoolWebClientId: '5vpqdi2hlkvqjsjqd3gsama9c8',
                //redirectUrl: 'http://localhost:3000',
            }
        });

// You can get the current config object
        var username = "testUsername";
        var password = "Longpassword!1";

        Auth.signUp({
            username,
            password,
            attributes: {
                email: "den5096@gmail.com"
            },
        })
            .then(data => console.log(data))
            .catch(err => console.log(err));

        const user = Auth.signIn(username, password);
        // console.log("user ", user);
        this.props.history.push('/confirm', {user: user});
        // history.replace('/confirm');
        // console.log('confirm ');
        // console.log(this.state);
    };


    onSubmit = (values) => {
        // console.log(values);
        // console.log("reg values");

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

// You can get the current config object
        var username = values.username;
        var password = values.password;
        console.log("username ",username);

        Auth.signUp({
            username,
            password,
            attributes: {
                given_name: values.firstName,
                family_name: values.lastName,
                email: values.email
            },
        })
            .then(data => console.log(data))
            .catch(err => console.log(err));
        this.props.history.push('/confirm', {email:values.email, username:values.username, userType: values.userType });
    };


    render() {
        const {classes} = this.props;
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
                                       validate={this.isNameValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';
                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                name='firstName'
                                                label='Property name'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )
                                    }}
                                </Field>
                                <Field name='country'
                                       validate={this.isNameValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';
                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                name='country'
                                                label='Country'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )
                                    }
                                    }
                                </Field>
                                <Field name='city'
                                       validate={this.isNameValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                name='city'
                                                label='City'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>
                                <Field name='address'
                                       onChange={(e) => {
                                           console.log("e ", e);
                                       }}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';
                                        return (
                                            <TextField
                                                onChange={(e) => {
                                                    console.log('e ', e);
                                                }}
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                label='Address'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>

                                <Field name='price'
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                label='Price for a day'
                                                placeholder='Enter your price'
                                                required
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>
                                <Box className={classes.upload}>
                                    <Avatar
                                        className={classes.avatar}
                                        src={
                                            'public/images/avatar-person.jpeg'
                                        }/>


                                    <input type="file" id="file-input" className="upload_input" accept="image/*"
                                           onChange={this.fileUploadHandler}/>
                                    <label htmlFor="file-input">Upload photos</label>
                                </Box>

                                <Field name='Property_description'
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                label='Property description'
                                                placeholder='Enter your description'
                                                multiline
                                                rows={6}
                                                rowsMax={12}
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>
                                <Field name='Facilities'
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                label='Facilities'
                                                placeholder='Enter your facilities'
                                                multiline
                                                rows={6}
                                                rowsMax={12}
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>
                                <Field name='Landmarks'
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                label='Sights and Landmarks'
                                                placeholder='Enter your Sights and Landmarks'
                                                multiline
                                                rows={6}
                                                rowsMax={12}
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>

                                <Box className={classes.actions}>
                                    <Button
                                        disabled={invalid}
                                        className={classes.btn}
                                        color='primary'
                                        type='submit'
                                        variant='contained'
                                    >
                                        Send property for approval
                                    </Button>
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

