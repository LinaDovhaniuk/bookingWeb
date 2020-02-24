
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClampLines from 'react-clamp-lines';

const propertyStyles = makeStyles({
    cover: {
        width: 150,
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        fontFamily: 'Montserrat',
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

function Property(props) {
    const classes = propertyStyles();
    const {  id, name, description } = props.item;
    return (
        <Card className={classes.card}>
                <div >
                    <img
                        className={classes.image}
                        src='https://image.freepik.com/foto-gratis/plano-geometrico-papel-azul-rosa-blanco-color-blanco-tres-fondos-al-lado_78774-433.jpg'/>
                </div>
            <Box className={classes.info}>
                <Typography variant='h5'>{name}</Typography>
                <ClampLines
                    text={description}
                    id="really-unique-id"
                    lines={3}
                    ellipsis="..."
                    buttons={false}
                />
                <NavLink
                    className={classes.link}
                    to = {`/properties/${id}`}
                >
                    View more
                </NavLink>
            </Box>
        </Card>
    )
}


export default compose(
    connect(null),
    withRouter,
)(Property);