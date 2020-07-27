import {REGISTER_USER_SUCCESS,
    LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, REGISTER_USER_FAIL} from '../action/authAction';
    
    
    const initialState = {
        auth: {},
        errors: {}
    }
    
    export default function(state = initialState, action){
    
        switch (action.type) {
            case REGISTER_USER_SUCCESS:
                return{
                    ...state,
                    auth: action.payload
                }
            case LOGIN_USER_SUCCESS:
                return{
                    ...state,
                    auth: action.payload
                }
            case LOGIN_USER_FAIL:
                return{
                    ...state,
                    errors: true
                }
            case REGISTER_USER_FAIL:
                return{
                    ...state,
                    errors: true
                }
        }
    
        return state;
    }