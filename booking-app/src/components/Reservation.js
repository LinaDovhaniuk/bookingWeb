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

        // console.log(type);
        history.replace(`/properties`);
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
                                            label='Number of guests'
                                            placeholder='Input number of guests'
                                            required
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
                                       Continue
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


const mapStateToProps = ({userData : { user, type }}) => ({
    user,
    type,
});

export default compose(
    withStyles(loginStyles),
    connect(mapStateToProps, { loginUserSuccess, setUserTypeSuccess })
)(Login);
