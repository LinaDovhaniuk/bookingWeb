import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";

import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClampLines from 'react-clamp-lines';
import withStyles from "@material-ui/core/styles/withStyles";
import BookingItem from './BookingItem';
import {getPropertyById, getPropertyComments} from "../redux/actions";

const propertyStyles = () => ({
    bookingsWrap: {

        width: '80%',
        margin: 'auto',
        marginTop: 70,
        maxWidth: "1180px"
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        fontFamily: 'Montserrat',
        width: '100%',
    },
    image: {
        width: 250,
        height: 170,
    },
    info: {
        height: 170,
        marginLeft: 10,
        '& >*': {
            fontFamily: 'Montserrat',
            lineHeight: 1.5,

        }
    },
    link: {
        textDecoration: 'none',
        color: '#39A298'
    },
    description: {
        minWidth: 600,
        minHeight: 70,
    },
    more: {},
});

class Bookings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'bookings': []
        }
    }

    componentDidMount() {
        console.log('request to back here!');
        this.setState({
            'bookings': [
                {
                    'id': 1,
                    'name': 'Name booking 1',
                    'sleeps': 3,
                    'description': 'some description1',
                },
                {
                    'id': 2,
                    'name': 'Name booking 2',
                    'sleeps': 1,
                    'description': 'some description2',
                },
                {
                    'id': 3,
                    'name': 'Name booking 3',
                    'sleeps': 3,
                    'description': 'some description3',
                }
            ]
        })
    }


    render() {
        const {classes, property} = this.props;
        const bookings = this.state.bookings;
        console.log(bookings);
        return (
            <div className={classes.bookingsWrap}>
                {bookings.map((booking) => (
                    <BookingItem booking={booking}></BookingItem>
                ))}
            </div>
        )
    }

}


export default compose(
    withStyles(propertyStyles),
    connect(null, {getPropertyComments, getPropertyById})
)(Bookings);
