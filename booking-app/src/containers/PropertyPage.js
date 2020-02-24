import { withRouter } from "react-router";

import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

import { properties, comments } from '../data';
import { Typography } from '@material-ui/core';
import Comment from "../components/Comment";
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import AddComment from "./AddComment";

const propertyPageStyles = makeStyles({
    mainBox: {

    },
    photosBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        '& > *': {
            width: '50%',
        }
    },
    mainPhoto: {
        '& > *': {
            width: '100%',
            height: '100%',
        }
    },
    photos: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        width: '50%'
    },
    info: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    card: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 25,
        margin: 10,
        lineHeight: 2,
        '& > *': {
            fontFamily: 'Montserrat',
        }

    },

    comments: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        alignItems: 'flex-start',
        margin: 10,
        '& > *': {
            fontFamily: 'Montserrat',
        }
    }
});

export const images = [
    'https://image.freepik.com/foto-gratis/plano-geometrico-papel-azul-rosa-blanco-color-blanco-tres-fondos-al-lado_78774-433.jpg',
    'https://image.freepik.com/foto-gratis/hermosa-composicion-geometrica-carton-azul-purpura-copyspace_24972-351.jpg',
    'https://image.freepik.com/foto-gratis/plano-geometrico-papel-azul-rosa-blanco-color-blanco-tres-fondos-al-lado_78774-433.jpg',
    'https://image.freepik.com/free-photo/copyspace_24972-346.jpg',
    'https://img.freepik.com/free-photo/copyspace_24972-348.jpg?size=626&ext=jpg'
];


function PropertyPage(props) {
    const classes = propertyPageStyles();
    const property = properties.items[0];
    const { id, name, description } = property;
    const [mainPhoto, ...restPhotos] = images;
    const [second, third, ...rest] = restPhotos;

    return (
        <Box className = { classes.mainBox }>
            <Grid container className = { classes.photosBox }>
                <Grid  className={classes.mainPhoto}>
                    <img src={mainPhoto}/>
                </Grid>
                <Grid container className={ classes.photos }>
                    {restPhotos.map((img, index) => (

                            <img key={`photo-${index}`} className={classes.image} src={img} />

                    ))}
                </Grid>
            </Grid>
            <Box className={ classes.info }>
                <Card className = { classes.card }>
                    <Typography variant='h6'>{name}</Typography>
                    <div>{description}</div>
                </Card>
                <Box className={ classes.actions }>
                    <Button>Reserve</Button>
                </Box>
            </Box>

            <Box className={ classes.comments }>
                <Typography variant='h4'>Comments</Typography>
                {comments.map((c, index) => <Comment key={`comment-${index}`} comment = {c}/>)}
                <AddComment />
            </Box>
        </Box>
    )
}


export default compose(
    withRouter,
    connect(null, { })
)(PropertyPage);