import { EMAIL_CHANGED} from "../actions/types";

const INITIAL_STATE = { email: '' }; //

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }; //It's necessary to cerate new object - don't modify old state and paste it in here
        default:
            return state;
    }

}