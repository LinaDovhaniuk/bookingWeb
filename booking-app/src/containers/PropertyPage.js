
import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";
import Box from "@material-ui/core/Box";
import {Typography} from '@material-ui/core';
import Comment from "../components/Comment";
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import AddComment from "./AddComment";
import {withStyles} from "@material-ui/styles";
import {loginUserSuccess, setUserTypeSuccess} from "../redux/actions";
import {history} from "../redux/store";
import {NavLink} from "react-router-dom";
import {Form} from "react-final-form";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {lightGreen} from "@material-ui/core/colors";


const propertyPageStyles = () => ({
    mainBox: {
        width: '100%',
    },
    photosBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '65px',
        width: '100%',
        '& > *': {
            width: '50%',
        }
    },
    mainPhoto: {
        '& > *': {
            width: '100%',
            height: '100%',
            maxHeight: 650,
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
        color: '#565454',
    },
    actions: {
        width: 350,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: '8%',
        '& > *': {
            width: 180,
            backgroundColor: '#009688',
            color: 'white',
            fontFamily: 'Montserrat',
        }
    },
    disapproveActions: {
        backgroundColor: '#c82f63',
        marginTop: 15,
        ':hover': {
            backgroundColor: '#c82f63'
        }
    },
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 15,
        marginTop: 10,
        lineHeight: 2,
        '& > *': {
            fontFamily: 'Montserrat',
            color: '#565454',
        }

    },

    comments: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        alignItems: 'flex-start',
        marginTop: 20,
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

class PropertyPage extends Component {

    constructor(props) {
        super(props);
        // this.adminType="admin";
        this.userType="user";
    }
    onSubmit =  async (values) => {

        // console.log(type);
        history.replace(`/reservation`);
        //console.log('Send values to api/login');
    };

    render() {

        const { classes, property, propertyComments } = this.props;

        console.log(this.props);
        const [ ,...restPhotos] = images;
        console.log(property);
        const { name, description, cover_image_url, price, opportunities, landmarks, rate } = property;
        console.log(opportunities);
        const { type } = this.props;
        const { user } = this.props;
        return (
            <Form
                onSubmit={this.onSubmit}
                render={({handleSubmit}) => (
                    <form className={classes.container} onSubmit={handleSubmit}>
            <Box className={classes.mainBox}>
                <Grid container className={classes.photosBox}>
                    <Grid className={classes.mainPhoto}>
                        <img src={cover_image_url
                            ?
                            cover_image_url
                            :
                            'https://image.freepik.com/foto-gratis/plano-geometrico-papel-azul-rosa-blanco-color-blanco-tres-fondos-al-lado_78774-433.jpg'
                        }/>
                    </Grid>
                    <Grid container className={classes.photos}>
                        {restPhotos.map((img, index) => (

                            <img key={`photo-${index}`} className={classes.image} src={img}/>

                        ))}
                    </Grid>
                </Grid>
                <Box className={classes.info}>
                    <Card className={classes.card}>
                        <Typography variant='h5'>{name}</Typography>
                        <div>{description}</div>
                    </Card>

                    <Box >
                        <box className={classes.actions}>
                        {type && type.userType==='User' ?

                                <Button
                                    className={classes.btn}
                                    color='primary'
                                    type='submit'
                                    variant='contained'>
                                        Reserve
                                </Button> :
                            <Button disabled >Reserve</Button>
                        }

                            </box>
                        <Card className={classes.card}>
                            <div>Price:{price} $ for a room</div>
                        </Card>
                        <Card className={classes.card}>
                            <div>Rate:{rate} ({propertyComments.length} comments)</div>
                        </Card>
                        <Card className={classes.card}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{fontWeight: 'bold'}}>Facilities</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {opportunities.map((row) => {
                                            return <TableRow >
                                                <TableCell component="th" scope="row">
                                                    {row}
                                                </TableCell>
                                            </TableRow>
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell ><text style={{fontWeight: 'bold'}}>LandMarks</text></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {landmarks.map((row) => {
                                            return <TableRow >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                            </TableRow>
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Card>

                    </Box>



                </Box>

                { this.userType === 'Host'
                        ? (
                            <fragment>
                            <Box className={classes.actions}>
                                <Button>Approve</Button>
                                <Button className={classes.disapproveActions}>Disapprove</Button>
                            </Box>

                        </fragment>
                        ) : (
                            //<fragment>
                                <Box className={classes.comments}>
                                    <Typography variant='h4'>Comments</Typography>
                                    {propertyComments.map((c, index) => <Comment key={`comment-${index}`} comment={c}/>)}
                                    {
                                       user && user.username && type && type.userType==='User' ? (<AddComment/>) :(<fragment/>)
                                    }
                                </Box>
                          //  </fragment>
                        )

                }

            </Box>

                    </form>
                )}
            />
        )
    }
}


const mapStateToProps = (state) => ({
    property: state.propertyData.property,
    propertyComments: state.propertyData.comments,
});

const mapStateToProps2 = ({userData : { user, type }}) => ({
    user,
    type,
});

export default compose(
    withStyles(propertyPageStyles),
    connect(mapStateToProps),
    connect(mapStateToProps2, { loginUserSuccess, setUserTypeSuccess })
)(PropertyPage);

