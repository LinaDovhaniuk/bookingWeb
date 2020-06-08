
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClampLines from 'react-clamp-lines';
import withStyles from "@material-ui/core/styles/withStyles";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
import { makeStyles } from '@material-ui/core/styles';

import { getPropertyById, getPropertyComments } from "../redux/actions";

const propertyStyles = () => ({
    cover: {
        width: 150,
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
        minWidth: 800,
        minHeight: 70,
    },
    more: {},
});

class Property extends Component {

    constructor(props){
        super(props);
    }

    getPropertyInfo = (id) => () => {
      const { getPropertyById, getPropertyComments } = this.props;
      getPropertyById(id);
      getPropertyComments(id);
    };


    render() {
        const { classes, property }= this.props;
        const {  id, name, description, cover_image_url } = property;

        return (
            <Card className={classes.card}>
                <div >
                    <img
                        className={classes.image}
                        src={cover_image_url
                            ?
                            cover_image_url
                            :
                            'https://image.freepik.com/foto-gratis/plano-geometrico-papel-azul-rosa-blanco-color-blanco-tres-fondos-al-lado_78774-433.jpg'
                        }/>
                </div>
                <Box className={classes.info}>
                    <Typography variant='h5'>{name}</Typography>
                    <ClampLines
                        text={description}
                        id="really-unique-id"
                        lines={8}
                        ellipsis="..."
                        buttons={false}
                    />
                    <NavLink
                        onClick = {this.getPropertyInfo(id)}
                        className={classes.link}
                        to = {`/properties/${id}`}
                    >
                        View more
                    </NavLink>
                </Box>
            </Card>
        )
    }

}


export default compose(
    withStyles(propertyStyles),
    connect(null, { getPropertyComments, getPropertyById })
)(Property);
