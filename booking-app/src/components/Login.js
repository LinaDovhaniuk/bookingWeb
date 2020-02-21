// import { withRouter } from "react-router";
// import { withRouter } from "react-router";
import { withRouter } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import { Form, Field } from 'react-final-form';
import TextField from "@material-ui/core/TextField";
import { NavLink } from 'react-router-dom';
import Card from "@material-ui/core/Card";

const loginStyles = makeStyles({
    container: {
        minWidth:       160,
        margin:         10,
        display:        'flex',
        justifyContent: 'space-around',
        flexDirection:  'column',
        alignItems:     'center',
    },
    item: {
        margin: 8,
        width:  '100%',
    },
    actions: {
        display:       'flex',
        flexDirection: 'row',
    },
    btn: {
        margin: 3,
    },
});

function Login(props) {
    const classes = loginStyles();

    const onSubmit = (values) => {
       console.log('Send values to api/login');
    };

    return (
        <Card>
            <div>Sign in</div>
            <Form
                onSubmit = { onSubmit }
                render = { ({ handleSubmit }) => (
                    <form className = { classes.container } onSubmit = { handleSubmit }>
                        <Field name = 'email'>
                            {({ input }) => (
                                <TextField
                                    className = { classes.item }
                                    placeholder = 'Email'
                                    required
                                    variant = 'outlined'
                                    { ...input }
                                />
                            )}
                        </Field>
                        <Field name = 'password'>
                            {({ input, meta }) => (
                                <TextField
                                    className = { classes.item }
                                    name = 'password'
                                    placeholder = 'Password'
                                    required
                                    type = 'password'
                                    variant = 'outlined'
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
                            <NavLink className = { classes.btn } to = '/register'>Don’t have any account yet? Sign up </NavLink>
                        </Box>
                    </form>

                ) }
            />

        </Card>
    );
}


export default withRouter(compose(
)(Login));