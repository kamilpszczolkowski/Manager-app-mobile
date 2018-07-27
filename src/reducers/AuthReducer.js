import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: ''
}; //

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload}; //It's necessary to cerate new object - don't modify old state and paste it in here
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload};
        default:
            return state;
    }
}