import { withRouter } from "react-router";

import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Field, Form } from "react-final-form";
import withStyles from "@material-ui/core/styles/withStyles";
import { addPropertyComment } from "../redux/actions";

const addCommentStyles = () => ({
    mainBox: {
        display:        'flex',
        flexDirection:  'row',
        width: '100%',
        marginTop: 10,
        padding: 20,
        fontFamily: 'Montserrat',
        paddingTop: '70px'
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


class AddComment extends Component {

    onSubmit = (comment) => {
        const { property :  {id}, addPropertyComment } = this.props;
        addPropertyComment(id, comment.text);
        return new Promise(resolve => {
            setTimeout(resolve, 0);
        })
    };

    render () {
        const { classes } = this.props;
        return (
            <Box className={classes.mainBox}>
                <Avatar
                    className={classes.avatar}
                    src='public/images/avatar-person.jpeg'/>
                <Box className={classes.commentBox}>

                    <Form
                        onSubmit={this.onSubmit}
                        render={({handleSubmit, form}) => (
                            <form
                                className={classes.form}
                                onSubmit={event =>{
                                const promise = handleSubmit(event);
                                promise.then(() => {
                                    form.reset();
                                });
                                return promise;
                            }}
                            >
                                <Field name='text'>
                                    {({input}) => (
                                        <TextField
                                            placeholder='Leave your feedback here ...'
                                            required
                                            variant="outlined"
                                            type = "text"
                                            multiline
                                            rows="6"
                                            {...input}
                                        />
                                    )}
                                </Field>
                                <Button
                                    className={classes.btn}
                                    color='primary'
                                    type='submit'
                                    variant='contained'

                                >
                                    Send
                                </Button>

                            </form>

                        )}
                    />

                </Box>
            </Box>
            )

    }
}

const mapStateToProps = ({propertyData : { property }}) => ({
    property,
});

export default compose(
    withStyles(addCommentStyles),
    connect(mapStateToProps, { addPropertyComment })
)(AddComment);
