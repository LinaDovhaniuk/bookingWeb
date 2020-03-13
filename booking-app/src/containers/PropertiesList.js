import {withRouter} from "react-router";
import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";


import Property from "../components/Property";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
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
    }


    render() {
        const { classes, properties } = this.props;

        return (
            <Box className={classes.mainBox}>
                <Box className={classes.actions}>
                    <Button>Profile Settings</Button>
                </Box>
                <Box className={classes.properties}>
                    {properties.map( property =>  <Property key={`property-${property.id}`} property={property} />)}
                </Box>
            </Box>

        )
    }
}

const mapStateToProps = ({ propertyData: {properties} }) => ({
    properties
});

export default compose(
    withStyles(listStyles),
    connect(mapStateToProps)
)(PropertiesList);

