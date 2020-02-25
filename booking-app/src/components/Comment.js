import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import {user} from "../data";

const moodColor = {
    'negative': '#F11A4E',
    'neutral':  '#A09D9D',
    'positive': '#1EE56E'
};


const commentStyles = () => ({
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
class Comment extends Component {

    constructor(props) {
        super(props);
        this.info = {...props.comment};
        this.author = {...this.info.author};
    }
    render() {
        const {classes} = this.props;
         return (
        <Card className = { classes.card }>
                <Avatar
                    className = { classes.avatar }
                    src = 'public/images/avatar-person.jpeg' />
                <Box className = { classes.infoBox }>
                    <Box className = {classes.mainInfo}>
                        <Box className = { classes.info }>
                            <div>{this.author.first_name} {this.author.last_name}</div>
                            <div>{this.info.created_date}</div>
                        </Box>
                        <Box className = { classes.mood }>
                            <div style = {{color: moodColor[this.info.mood_type]}}>{this.info.mood_type}</div>
                        </Box>
                    </Box>
                    <Box className = { classes.description }>{this.info.text}</Box>
                </Box>
        </Card>
    )
    }
}
Comment.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(commentStyles)(Comment);
