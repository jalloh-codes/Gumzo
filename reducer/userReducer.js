import {GET_CONTACTS_SUCCESS, GET_CONTACTS_FAIL} from '../action/userAction';

const initialState = {
    user: [],
    errors: {}
}
export default function(state = initialState, action){
    switch (action.type) {
        case GET_CONTACTS_SUCCESS:
            return{
                ...state,
                user: action.payload
            }
    }

    return state
};
