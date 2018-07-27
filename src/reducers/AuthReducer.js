import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
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
        default:
            return state;
    }

}