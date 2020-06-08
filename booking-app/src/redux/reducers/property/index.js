import {
    GET_PROPERTIES_SUCCESS,
    GET_PROPERTY_COMMENTS_SUCCESS,
    GET_PROPERTY_BY_ID_SUCCESS, ADD_PROPERTY_COMMENT_SUCCESS,ADD_PROPERTY_SUCCESS,
} from '../../actions/types';

const initialState = {
    properties: [],
    property: {},
    comments: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PROPERTIES_SUCCESS:
            return {
                ...state,
                properties: [...payload],
            };
        case GET_PROPERTY_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: [...payload],
            };
        case GET_PROPERTY_BY_ID_SUCCESS:
            return {
                ...state,
                property: {...payload}
            };
        case ADD_PROPERTY_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [...state.comments, payload]
            };
        case ADD_PROPERTY_SUCCESS:
            return {
                ...state,
                property: {...payload}
            };
        default:
            return state;
    }
};