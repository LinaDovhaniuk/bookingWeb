import {withRouter} from "react-router";
import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";
import {makeStyles} from '@material-ui/core/styles';

import {properties, user} from '../data';
import Property from "../components/Property";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";

const listStyles = () => ({
    mainBox: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: '100%',
        flexDirection: 'row',
        fontFamily: 'Montserrat',
        paddingTop: '70px'
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

class PropertiesList extends Component {

    constructor(props) {
        super(props);
        this.items = {...properties};
    }

    render() {
        const {classes} = this.props;
        console.log(this.items);
        return (
            <Box className={classes.mainBox}>
                <Box className={classes.actions}>
                    <Button>Profile Settings</Button>
                </Box>
                <Box className={classes.properties}>
                    {this.items.items.map( item =>  <Property key={`property-${item.id}`} item={item} />)}
                    <div className={classes.actions}>
                        <Button>View more</Button>
                    </div>
                </Box>
            </Box>

        )
    }
}

PropertiesList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(listStyles)(PropertiesList);
