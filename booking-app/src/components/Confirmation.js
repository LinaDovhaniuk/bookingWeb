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
        }},
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
    onSubmit = (values) => {
        history.replace('/username');
        console.log('Send confirmation code');
        //history.replace('/username');
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.rootContainer}>
                <Card className={classes.card}>
                    <div className={classes.helpInfo}>
                        <Typography variant='h6'> Confirmation input </Typography>
                    </div>
                    <Form
                        onSubmit={this.onSubmit}
                        render={({handleSubmit}) => (
                            <form className={classes.container} onSubmit={handleSubmit}>
                                <Field name='email'>
                                    {({input}) => (
                                        <TextField
                                            className={classes.item}
                                            label='Email'
                                            disabled={true}
                                            placeholder='Input text for a single line field'
                                            required
                                            {...input}
                                        />
                                    )}
                                </Field>
                                <Field name='confirmation'>
                                    {({input, meta}) => (
                                        <TextField
                                            className={classes.item}
                                            name='password'
                                            label='Confirmation code'
                                            placeholder='Enter code'
                                            required
                                            type='text'

                                            {...input}
                                        />
                                    )}
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

