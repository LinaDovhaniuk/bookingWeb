// import { withRouter } from "react-router";
import { withRouter } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const userPageStyles = makeStyles({
    mainBox: {
        display:        'flex',
        justifyContent: 'center',
        flexDirection:  'column',
        alignItems:     'center',
    },
    card: {
        width: '80%',
    },
    profileInfo: {
        display:        'flex',
        justifyContent: 'center',
        flexDirection:  'column',
        alignItems:     'center',
        padding:        50,
    },
    info: {
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        flexDirection:  'column',
        textAlign:      'center',
        paddingRight:   '45px',
        paddingLeft:    '45px',
        fontSize:       25,
        '& > *':        {
            textOverflow: 'ellipsis',
            overflow:     'hidden',
        },
    },

    avatar: {
        width:          '130px',
        height:         '130px',
        opacity:        0.8,
        color:          'white',
        borderRadius:   '50%',
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        fontSize: 25,
        '& > *':        {
            fontSize: 60,
        },
    },
    username: {

    },
    rating: {

    },

});


function UserPage(props) {
    const classes = userPageStyles();
    const name = 'User User';
    const userRating = 3;
    return (
        <Box className = { classes.mainBox }>
            <Box className = { classes.actions }>
                <Button>Profile Settings</Button>
                <Button>Payment Settings</Button>
            </Box>
            <Card className = { classes.card }>
                <Typography>User Profile</Typography>
                <Box className = { classes.profileInfo}>
                    <Avatar
                        className = { classes.avatar }
                        src = 'public/images/avatar-person.jpeg' />

                    <Box className = { classes.info }>
                        <Box className={ classes.rating }>
                            <div>{name}</div>
                            <Rating name="read-only" value={userRating} readOnly />
                        </Box>
                        <Box className={ classes.username}>
                            <div>Username</div>
                            <div>{window.location.href}</div>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}


export default withRouter(compose(
    connect(null, { })
)(UserPage));