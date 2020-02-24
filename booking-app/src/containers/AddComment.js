import { withRouter } from "react-router";

import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Field, Form } from "react-final-form";
import { makeStyles } from '@material-ui/core/styles';

const addCommentStyles = makeStyles({
    mainBox: {
        display:        'flex',
        flexDirection:  'row',
        width: '100%',
        marginTop: 10,
        padding: 20,
        fontFamily: 'Montserrat',
    },

    avatar: {
        width:          '100px',
        height:         '100px',
        color:          'white',
        marginRight: 20,
    },
    commentBox: {
        display:        'flex',
        flexDirection:  'column',
        width: '80%',
    },
    btn: {
        width: 180,
        borderRadius: '8%',
        backgroundColor: '#009688',
        color: 'white',
        fontFamily: 'Montserrat',
        marginTop: 10,
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

});


function AddComment(props) {
    const classes = addCommentStyles();
    const onSubmit = () => {
        console.log('Sent');
    };
    return (
        <Box className = { classes.mainBox }>
            <Avatar
                className = { classes.avatar }
                src = 'public/images/avatar-person.jpeg' />
            <Box className = { classes.commentBox }>

                    <Form
                        onSubmit = { onSubmit }
                        render = { ({ handleSubmit }) => (
                            <form
                                className = { classes.form }
                                onSubmit = { handleSubmit }>
                                <Field name = 'comment'>
                                    {({ input }) => (
                                        <TextField
                                            placeholder = 'Leave your feedback here ...'
                                            required
                                            variant="outlined"
                                            multiline
                                            rows="6"
                                            { ...input }
                                        />
                                    )}
                                </Field>
                                    <Button
                                        className = { classes.btn }
                                        color = 'primary'
                                        type = 'submit'
                                        variant = 'contained' >
                                        Send
                                    </Button>

                            </form>

                        ) }
                    />

            </Box>
        </Box>
    )
}


export default compose(
    withRouter,
    connect(null, { })
)(AddComment);