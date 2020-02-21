// import { withRouter } from "react-router";
import { withRouter } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { Field, Form } from "react-final-form";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";

const registerStyles = makeStyles({
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

function Register() {
    const classes = registerStyles();
    const onSubmit = (values) => {
        console.log('Send values to api/register')
    };

    return (
        <Card>
            <Typography variant = 'h6'> Create your account </Typography>
            <div> Create an account to easily use Booking services. </div>
            <Form
                onSubmit = { onSubmit }
                render = { ({ handleSubmit }) => (
                    <form className = { classes.container } onSubmit = { handleSubmit }>
                        <Field name = 'firstName'>
                            {({ input }) => (
                                <TextField
                                    className = { classes.item }
                                    name = 'firstName'
                                    placeholder = 'First name'
                                    required
                                    variant = 'outlined'
                                    { ...input }
                                />
                            )}
                        </Field>
                        <Field name = 'lastName'>
                            {({ input, meta }) => (
                                <TextField
                                    className = { classes.item }
                                    name = 'lastName'
                                    placeholder = 'Last name'
                                    required
                                    variant = 'outlined'
                                    { ...input }
                                />
                            )}
                        </Field>
                        <Field name = 'username'>
                            {({ input, meta }) => (
                                <TextField
                                    className = { classes.item }
                                    placeholder = 'Username'
                                    required
                                    variant = 'outlined'
                                    { ...input }
                                />
                            )}
                        </Field>
                        <Field name = 'email'>
                            {({ input, meta }) => (
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
                                    placeholder = 'password'
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
                                Sign up
                            </Button>
                            <NavLink className = { classes.btn } to = '/login'>Already have an account. Sign in </NavLink>
                        </Box>
                    </form>
                ) }
            />
        </Card>

    )
}


export default withRouter(compose(
    connect(null, { })
)(Register));