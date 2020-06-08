import {withRouter,} from "react-router";
import {NavLink} from "react-router-dom";

import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component} from "react";
import {Field, Form} from "react-final-form";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {withStyles} from "@material-ui/styles";
import awsconfig from './amf_config';
import Amplify, {Auth} from 'aws-amplify';
import {history} from '../redux/store';
import Avatar from "@material-ui/core/Avatar";
import {addPropertySuccess, loginUserSuccess, setUserTypeSuccess} from "../redux/actions";
// import {reduxForm, change} from 'redux-form';
// import {connect} from 'react-redux';
//import {addProperty, addPropertyComment} from "../redux/actions";


const registerStyles = () => ({
    rootContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        fontFamily: 'Montserrat',
        paddingTop: '70px'
    },
    container: {
        margin: 10,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        margin: 8,
        width: '85%',
        color: '#39A298',
    },
    actions: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ' & > * ': {
            margin: 5,
        },
    },
    btn: {
        margin: 3,
        backgroundColor: '#39A298',
    },
    link: {
        color: '#39A298',
        textDecoration: 'none',
    },
    card: {
        width: 450,
        padding: 15,
    },
    helpInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ' & > div': {
            color: '#656565',
        }
    },

});

class PropertyAdding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            userType: false
        };
    }

    isNameValid = (name) => {
        if (!name) {
            return 'Please enter your value';
        }
        if (!(/^[a-zA-Z]+$/).test(name)) {
            return 'Only letters are allowed';
        }
        if (name.length > 80) {
            return 'Too long input (max size 80)';
        }
    };

    isUsernameValid = (username) => {
        this.setState({
            'usename': username,
        });
        if (!username) {
            return 'Please enter value';
        }
        if (!(/^[a-zA-Z0-9_]+$/).test(username)) {
            return 'Only letters are allowed';
        }
        if (username.length > 25) {
            return 'Too long input (max size 25)';
        }
    };


    addProperty = async (params) =>
        async (dispatch) => {
            const tocken= await Auth.currentSession();
            console.log(params);
            const response = await fetch (
                `https://api.booking.knine.xyz/properties`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + tocken.idToken.jwtToken,
                    },
                    method: 'POST',
                    body: JSON.stringify({"name": params.name,
                        "description":params.description,
                        "address":params.address,
                        "city":params.city,
                        "country":params.country,
                        "opportunities":params.opportunities,
                        "price":params.price,
                        "landmarks":params.landmarks,
                        "totalRoomsNumber":params.roomNumber,
                        "cover_image_file_name": "string",
                        "cover_image_base64": "string"}),
                });
            console.log(response);
            const responseJson = await response.json();
            console.log(responseJson);
            dispatch(addPropertySuccess(responseJson));
        };
    onSubmit = async (values) => {
      // console.log(values);

       // console.log(values.name);



            Amplify.configure({
                Auth: {
                    region: 'eu-central-1',
                    userPoolId: 'eu-central-1_pPGEanitH',
                    userPoolWebClientId: '4o98dleg8r6uqi1g09ctoua1cg',
                    //redirectUrl: 'http://localhost:3000',
                }
            });
        const tocken= await Auth.currentSession();


       // await console.log(tocken);
        const response = await  fetch (
            `https://api.booking.knine.xyz/properties`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + tocken.idToken.jwtToken,
                },
                method: 'POST',
                body: JSON.stringify({name: values.name,
                    "description":values.Property_description,
                    "address":values.address,
                    "city":values.city,
                    "country":values.country,
                    "opportunities":[values.facilities],
                    "price":values.price,
                    "landmarks":[{"name":values.landmarks, "distance":0}],
                    "totalRoomsNumber":1,
                    "cover_image_file_name": "string",
                    "cover_image_base64": "string"}),
            });
        console.log(response);
        const responseJson = await response.json();
        console.log(responseJson);
       // dispatch(addPropertySuccess(responseJson));

        history.replace('/Login');
        return new Promise(resolve => {
            setTimeout(resolve, 0);
        })
    };


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.rootContainer}>
                <Card className={classes.card}>
                    <div className={classes.helpInfo}>
                        <Typography variant='h6'> Property creation </Typography>
                        <div> Create a property.</div>
                    </div>

                    <Form
                        onSubmit={this.onSubmit}
                        render={({handleSubmit, invalid, ...data}) => console.log(data.submitting) || (
                            <form className={classes.container} onSubmit={handleSubmit}>
                                <Field name='name'
                                       validate={this.isNameValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';
                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                name='firstName'
                                                label='Property name'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )
                                    }}
                                </Field>
                                <Field name='country'
                                       validate={this.isNameValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';
                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                name='country'
                                                label='Country'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )
                                    }
                                    }
                                </Field>
                                <Field name='city'
                                       validate={this.isNameValid}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                name='city'
                                                label='City'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>
                                <Field name='address'
                                       onChange={(e) => {
                                           console.log("e ", e);
                                       }}
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';
                                        return (
                                            <TextField
                                                onChange={(e) => {
                                                    console.log('e ', e);
                                                }}
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                label='Address'
                                                placeholder='Input text for a single line field'
                                                required
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>

                                <Field name='price'
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                label='Price for a day'
                                                placeholder='Enter your price'
                                                required
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>
                                <Box className={classes.upload}>
                                    <Avatar
                                        className={classes.avatar}
                                        src={
                                            'public/images/avatar-person.jpeg'
                                        }/>


                                    <input type="file" id="file-input" className="upload_input" accept="image/*"
                                           onChange={this.fileUploadHandler}/>
                                    <label htmlFor="file-input">Upload photos</label>
                                </Box>

                                <Field name='Property_description'
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                label='Property description'
                                                placeholder='Enter your description'
                                                multiline
                                                rows={6}
                                                rowsMax={12}
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>
                                <Field name='facilities'
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                label='Facilities'
                                                placeholder='Enter your facilities'
                                                multiline
                                                rows={6}
                                                rowsMax={12}
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>
                                <Field name='landmarks'
                                >
                                    {({input, meta}) => {
                                        const error = ((meta.modified || meta.touched) && meta.error) || '';

                                        return (
                                            <TextField
                                                error={!!error}
                                                helperText={error}
                                                className={classes.item}
                                                label='Sights and Landmarks'
                                                placeholder='Enter your Sights and Landmarks'
                                                multiline
                                                rows={6}
                                                rowsMax={12}
                                                {...input}
                                            />
                                        )
                                    }
                                    }

                                </Field>

                                <Box className={classes.actions}>
                                    <Button
                                        disabled={invalid}
                                        className={classes.btn}
                                        color='primary'
                                        type='submit'
                                        variant='contained'
                                    >
                                        Send property for approval
                                    </Button>
                                </Box>
                            </form>
                        )}
                    />
                </Card>
            </div>


        )
    }
}

export default withStyles(registerStyles)(PropertyAdding);

//const mapStateToProps = ({propertyData : { property }}) => ({
  //  property,
//});

//export default compose(
 //   withStyles(registerStyles)(PropertyAdding),
  //  connect(mapStateT