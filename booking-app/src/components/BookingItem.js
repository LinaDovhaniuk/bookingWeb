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
import BookingPopup from '../partialComponents/BookingPopup'
import {getPropertyById, getPropertyComments} from "../redux/actions";

const propertyStyles = () => ({
    itemWrap: {
        paddingTop: '11px',
        paddingLeft: '48px',
        paddingBottom: '11px',
        paddingRight: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'white',
        borderRadius: '5px',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.14)',
        marginBottom: '43px'

    },
    leftCol: {
        width: '80%',
    },
    name: {
        fontFamily: 'Lato',
        fontWeight: 500,
        fontSize: "24px",
        color: '#39A298',
        marginBottom: '14px'
    },
    bold: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '17px',
        color: 'black'
    },
    mb_8: {
        marginBottom: '8px',
    },
    cancelBtn: {
        display: 'flex',
        width: '180px',
        height: '43px',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(0deg, rgba(189, 189, 189, 0.3), rgba(189, 189, 189, 0.3)), #8D394D;\n' +
            'box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12)',
        borderRadius: '3px',
        color: '#EEEEEE',
        fontSize: '12px',
        fontWeight: 600,
        cursor: 'pointer',
        outline: 'none'
    }
});

class BookingItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'item': props.booking,
            showPopup: false
        };
        console.log(props, 'BookingItem');

    }

    componentDidMount() {

    }


    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.itemWrap}>
                <div className={classes.leftCol}>
                    <p className={classes.name}>{this.state.item.name}</p>
                    <p className={classes.mb_8}><span className={classes.bold}>Sleeps:</span> {this.state.item.sleeps}
                    </p>
                    <p className={classes.mb_8}><span
                        className={classes.bold}>Room type:</span> {this.state.item.description}</p>
                </div>
                <button className={classes.cancelBtn} onClick={this.togglePopup.bind(this)}>Cancel</button>
                {this.state.showPopup ?
                    <BookingPopup
                        text='Click "Close Button" to hide popup'
                        item={this.state.item}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>

        );
    }

}


export default compose(
    withStyles(propertyStyles),
    connect(null, {getPropertyComments, getPropertyById})
)(BookingItem);
