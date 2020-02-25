import {withRouter} from "react-router";

import {compose} from "redux";
import {connect} from "react-redux";
import React, { Component } from "react";
import { withStyles } from '@material-ui/styles';

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import '../style/index.css'
import { user } from '../data'


const userPageStyles = () => ({
        mainBox: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingTop: '70px'
        },
        card: {
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 25,
            '& > *': {
                fontFamily: 'Montserrat',
                fontSize: 20,
            }

        },
        profileInfo: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 50,
            width: '100%',

        },
        info: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            textAlign: 'center',
            paddingRight: '45px',
            paddingLeft: '45px',
            fontSize: 25,
            '& > *': {
                textOverflow: 'ellipsis',
                overflow: 'hidden',
            },
        },

        avatar: {
            width: '130px',
            height: '130px',
            opacity: 0.8,
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 25,
            '& > *': {
                fontSize: 60,
            },
        },
        usernameInfo: {
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            lineHeight: 1.5,
        },
        upload: {
            color: '#009688',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            '& > *': {
                margin: 5,
            }
        },
        actions: {
            width: 180,
            display:
                'flex',
            flexDirection:
                'column',
            margin:
                10,
            borderRadius:
                '8%',
            '& > *':
                {
                    margin: 5,
                    backgroundColor:
                        '#009688',
                    color:
                        'white',
                    fontFamily:
                        'Montserrat',
                }
        }
        ,

    })
;


class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {...user};
    }

    fileUploadHandler = event => {
        let file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = r => {
            let base_64_encode_image = r.srcElement.result;
            this.setState({
                image: base_64_encode_image
            });
        }
    };


    render() {
        const { classes } = this.props;
        const { firstName, lastName, username, email, rating, image } = this.state;
        return (
            <Box className={classes.mainBox}>
                <Box className={classes.actions}>
                    <Button>Profile Settings</Button>
                    <Button>Payment Settings</Button>
                </Box>
                <Card className={classes.card}>
                    <Typography varian='h5'>Your Profile</Typography>
                    <Box className={classes.profileInfo}>
                        <Box className={classes.upload}>
                            <Avatar
                                className={classes.avatar}
                                src={ image === ''
                                    ?
                                    'public/images/avatar-person.jpeg'
                                    :
                                    image
                                }/>
                            <input type="file" class="upload_input" onChange={this.fileUploadHandler}/>

                        </Box>
                        <Box className={classes.info}>
                            <Box className={classes.usernameInfo}>
                                <div>{firstName} {lastName}</div>
                                <div>Username</div>
                                <div>Email</div>
                            </Box>
                            <Box className={classes.usernameInfo}>
                                <Rating name="read-only" value={rating} readOnly/>
                                <div>{window.location.href}</div>
                                <div>{email}</div>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Box>


        )
    }
}


export default withStyles(userPageStyles)(UserPage);




