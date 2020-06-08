import {
    GET_PROPERTIES_SUCCESS,
    GET_PROPERTY_COMMENTS_SUCCESS,
    GET_PROPERTY_BY_ID_SUCCESS,
    ADD_PROPERTY_COMMENT_SUCCESS,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS,
    SET_USER_TYPE_SUCCESS,
    ADD_PROPERTY_SUCCESS
} from './types';
import {Auth} from "aws-amplify";

export const getAllProperties =  () =>
    async (dispatch) => {
        const response = await fetch(
            `https://api.booking.knine.xyz/properties/`,
            {
                method: 'GET',
            });
        const responseJson = await response.json();
        dispatch(getAllPropertiesSuccess(responseJson));
    };

export const getAllPropertiesSuccess = (data) => ({
    type: GET_PROPERTIES_SUCCESS,
    payload: data,
});

export const getPropertyComments = (id) =>
    async (dispatch) => {
        const response = await fetch(
            `https://api.booking.knine.xyz/properties/${id}/comments`,
            {
                method: 'GET',
            });
        const responseJson = await response.json();
        console.log(responseJson);
        dispatch(getPropertyCommentsSuccess(responseJson));
    };

export const getPropertyCommentsSuccess = (data) => ({
    type: GET_PROPERTY_COMMENTS_SUCCESS,
    payload: data,
});

export const getPropertyById = (id) =>
    async (dispatch) => {
        const response = await fetch(
            `https://api.booking.knine.xyz/properties/${id}`,
            {
                method: 'GET',
            });
        const responseJson = await response.json();
        dispatch(getPropertyByIdSuccess(responseJson));
    };

export const getPropertyByIdSuccess = (data) => ({
    type: GET_PROPERTY_BY_ID_SUCCESS,
    payload: data,
});

export const addPropertyComment = (id, comment) =>
    async (dispatch) => {
    const tocken= await Auth.currentSession();
    console.log(comment);
        const response = await fetch (
            `https://api.booking.knine.xyz/properties/${id}/comments`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + tocken.idToken.jwtToken,
                },
                method: 'POST',
                body: JSON.stringify({"text": comment}),
            });
        const responseJson = await response.json();
        dispatch(addPropertyCommentSuccess(responseJson));
    };

export const addProperty = (params) =>
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
        const responseJson = await response.json();
        console.log(responseJson);
        dispatch(addPropertySuccess(responseJson));
    };


export const addPropertyCommentSuccess = (data) => ({
    type: ADD_PROPERTY_COMMENT_SUCCESS,
    payload: data,
});
export const addPropertySuccess = (data) => ({
    type: ADD_PROPERTY_SUCCESS,
    payload: data,
});

export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
});
export const setUserTypeSuccess = (type) => ({
    type: SET_USER_TYPE_SUCCESS,
    payload: type,
});
export const logoutUserSuccess = () => ({
    type: LOGOUT_USER_SUCCESS,
});

