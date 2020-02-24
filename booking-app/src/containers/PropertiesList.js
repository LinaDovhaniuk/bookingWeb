
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { properties } from '../data';
import Property from "../components/Property";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const listStyles = makeStyles({
   mainBox: {
       display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'row',
       fontFamily: 'Montserrat',
   },
    actions: {
        width: 180,
        display: 'flex',
        flexDirection: 'column',
        margin: 15,
        borderRadius: '8%',
        '& > *': {
            width: 180,
            backgroundColor: '#009688',
            color: 'white',
            fontFamily: 'Montserrat',
        }
    },
    properties: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function PropertiesList(props) {
    const classes = listStyles();
    const { items } = properties;

    return (
        <Box className = { classes.mainBox }>
            <Box className = {classes.actions}>
                <Button>Profile Settings</Button>
            </Box>
            <Box className = { classes.properties }>
                {items.map( item =>  <Property key={`property-${item.id}`} item={item} />)}
                <div className = {classes.actions}>
                    <Button>View more</Button>
                </div>
            </Box>
        </Box>

    )
}


export default compose(
    withRouter,
    connect(null, { })
)(PropertiesList);