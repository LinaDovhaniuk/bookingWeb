import {withRouter} from "react-router";
import {NavLink} from "react-router-dom";
import {history} from '../redux/store';
import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import {Form, Field} from 'react-final-form';
import TextField from "@material-ui/core/TextField";

import Amplify, {Auth} from 'aws-amplify';
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

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
    helpInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ' & > div': {
            color: '#656565',
        }
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
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email ? this.props.location.state.email : '',
            username: this.props.location.state.username ? this.props.location.state.username : '',
            userType: this.props.location.state.userType ? this.props.location.state.userType : false,
        };
    }

    onSubmit = (values) => {
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
        // console.log("values on confirmation");
        // console.log(values);
        Auth.confirmSignUp(values.email, values.confirmation, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true
        }).then(data => console.log(data))
            .catch(err => console.log(err));
        // console.log('Send confirmation code');
        history.replace('/Login');
    };


    componentDidMount() {

        try {

            this.setState({
                email: this.props.location.state.email ? this.props.location.state.email : '',
                username: this.props.location.state.username ? this.props.location.state.username : '',
                userType: this.props.location.state.userType ? this.props.location.state.userType : false,
            })
            console.log(this.state);
        } catch (e) {
            this.setState({
                email: '',
                username: '',
                userType: false

            })
        }
        // console.log("componentDidMount ", this.props.location.state.email);
        // this.props.initialize({email: 'some value here'});
        // set the value individually
        // this.props.dispatch(change('myFormName', 'anotherField', 'value'));
    }

    render() {
        const {classes} = this.props;
        let username = this.state.username;
        const email = 'asdasd@asdasd.com';
        console.log(username);
        return (
            <div className={classes.rootContainer}>
                <Card className={classes.card}>
                    <div className={classes.helpInfo}>
                        <Typography variant='h6'> Confirmation input </Typography>
                    </div>
                    <Form
                        onSubmit={this.onSubmit}
                        render={({handleSubmit, invalid, ...data}) => console.log(data.submitting) || (
                            <form className={classes.container} onSubmit={handleSubmit}>
                                <Field name='username'>
                                    {({input, meta}) => {
                                        return (
                                                <TextField

                                                    value={this.state.username}
                                                    name='username'
                                                    className={classes.item}
                                                    label='Username'
                                                   // disabled={true}
                                                    placeholder='Input text for a single line field'
                                                    required

                                                />
                                            )
                                    }}
                                </Field>
                                <div className={classes.item}>
                                    { //<label  >User type </label>
                                    }
                                    <Field name="userType" defaultValue={this.state.userType} className={classes.item} component="select">
                                        <option value="Host">Host</option>
                                        <option value="User">User</option>
                                    </Field>
                                </div>
                                <Field name='confirmation'>
                                    {({input, meta}) => {
                                        return (
                                            <TextField
                                                //value={this.state.email}

                                                name='confirmation'
                                                className={classes.item}
                                                label='Confirmation code'
                                                placeholder='Enter code'
                                                required
                                                {...input}
                                            />
                                        )
                                    }}
                                </Field>

                                <Box className={classes.actions}>
                                    <Button
                                        className={classes.btn}
                                        color='primary'
                                        type='submit'
                                        variant='contained'
                                    >
                                        Confirm
                                    </Button>
                                </Box>
                            </form>

                        )}
                    />

                </Card>
            </div>

        );
    }
}


Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(loginStyles)(Login);

