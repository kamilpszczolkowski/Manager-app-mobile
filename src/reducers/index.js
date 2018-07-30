import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmplyeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmplyeFormReducer
});