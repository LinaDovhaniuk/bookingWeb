import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

const moodColor = {
    'negative': '#F11A4E',
    'neutral':  '#A09D9D',
    'positive': '#1EE56E'
};


const commentStyles = makeStyles({
    cover: {
        width: 150,
    },
    more: {},
    avatar: {
        width:          '100px',
        height:         '100px',
        color:          'white',
        position: 'inherit',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 15,
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        marginLeft: 20,
        lineHeight: 1.5,
    },
    mainInfo:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        ' & > *': {
            fontSize: 20,
            fontFamily: 'Montserrat',
        },
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
    },
    mood: {
        display: 'flex',
        flexDirection: 'row',
    },

});

function Comment(props) {
    const classes = commentStyles();
    const { id, author, text, created_date, mood_type } = props.comment;
    const { first_name, last_name } = author;
    return (
        <Card className = { classes.card }>
                <Avatar
                    className = { classes.avatar }
                    src = 'public/images/avatar-person.jpeg' />
                <Box className = { classes.infoBox }>
                    <Box className = {classes.mainInfo}>
                        <Box className = { classes.info }>
                            <div>{first_name} {last_name}</div>
                            <div>{created_date}</div>
                        </Box>
                        <Box className = { classes.mood }>
                            <div style = {{color: moodColor[mood_type]}}>{mood_type}</div>
                        </Box>
                    </Box>
                    <Box className = { classes.description }>{text}</Box>
                </Box>
        </Card>
    )
}


export default compose(
    withRouter,
    connect(null, { })
)(Comment);