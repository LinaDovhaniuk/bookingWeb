// import { AUTH_USER_SUCCESS, CANCEL_EDIT_USER, EDIT_USER_SUCCESS, REGISTER_USER_SUCCESS } from '../../actions/types';
import {LOGIN_USER_SUCCESS} from "../../actions/types";
import {SET_USER_TYPE_SUCCESS} from "../../actions/types";

const initialState = {
    user: {},
    type: {},
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        // case EDIT_USER_SUCCESS:
        //     return {
        //         user: {...payload},
        //     };
        // case CANCEL_EDIT_USER:
        //     return {
        //         ...state,
        //     };
        // case REGISTER_USER_SUCCESS:
        //     return {
        //         user: { ...payload },
        //     };
         case LOGIN_USER_SUCCESS:
             return {
                 ...state,
                 user: { ...payload },
             };
        case SET_USER_TYPE_SUCCESS:
            return {
                ...state,
                type: { ...payload },
            };

        default:
            return state;
    }
};
