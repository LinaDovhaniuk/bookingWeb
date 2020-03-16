import {
    GET_PROPERTIES_SUCCESS,
    GET_PROPERTY_COMMENTS_SUCCESS,
    GET_PROPERTY_BY_ID_SUCCESS,
    ADD_PROPERTY_COMMENT_SUCCESS,
    LOGIN_USER_SUCCESS,
} from './types';

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
    console.log(comment);
        const response = await fetch (
            `https://api.booking.knine.xyz/properties/${id}/comments`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({"text": comment}),
            });
        const responseJson = await response.json();
        dispatch(addPropertyCommentSuccess(responseJson));
    };

export const addPropertyCommentSuccess = (data) => ({
    type: ADD_PROPERTY_COMMENT_SUCCESS,
    payload: data,
});

export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
});