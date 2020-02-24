import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import { Form, Field } from 'react-final-form';
import TextField from "@material-ui/core/TextField";

import Card from "@material-ui/core/Card";

const loginStyles = makeStyles({
    rootContainer: {
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        width: '100%',
        padding: 20,
        fontFamily: 'Montserrat',
    },
    container: {
        margin:         10,
        display:        'flex',
        justifyContent: 'space-around',
        flexDirection:  'column',
        alignItems:     'center',
    },
    item: {
        margin: 8,
        width:  '100%',
        color: '#39A298',
    },
    actions: {
        display:       'flex',
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

function Login(props) {
    const classes = loginStyles();

    const onSubmit = (values) => {
       console.log('Send values to api/login');
    };

    return (
        <div className={classes.rootContainer}>
            <Card className={classes.card}>
                <Form
                    onSubmit = { onSubmit }
                    render = { ({ handleSubmit }) => (
                        <form className = { classes.container } onSubmit = { handleSubmit }>
                            <Field name = 'email'>
                                {({ input }) => (
                                    <TextField
                                        className = { classes.item }
                                        label = 'Email'
                                        placeholder = 'Input text for a single line field'
                                        required
                                        { ...input }
                                    />
                                )}
                            </Field>
                            <Field name = 'password'>
                                {({ input, meta }) => (
                                    <TextField
                                        className = { classes.item }
                                        name = 'password'
                                        label = 'Password'
                                        placeholder = 'Enter your password'
                                        required
                                        type = 'password'

                                        { ...input }
                                    />
                                )}
                            </Field>

                            <Box className = { classes.actions }>
                                <Button
                                    className = { classes.btn }
                                    color = 'primary'
                                    type = 'submit'
                                    variant = 'contained' >
                                    Sign in
                                </Button>
                                <NavLink className = { classes.link } to = '/register'>Don’t have any account yet? Sign up </NavLink>
                            </Box>
                        </form>

                    ) }
                />

            </Card>
        </div>

    );
}


export default compose(
    withRouter,
    connect(null, { })
)(Login);