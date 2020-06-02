


const authReducer = [];

const  authReducers = (state = authReducer, action) =>{

    switch (action.type) {
        case 'RESTORE_TOKEN':
            return{...state, 
                userToken: action.token,
                isLoading: false,
            }
        case 'LOG_IN':
            // return{...state, 
            //     isSignout: false,
            //     userToken: action.token,   
            // }
            return[
                ...state,
                action.user
            ]
        case 'SIGN_UP':
            return[
                ...state,
                action.user
            ]
            // return{...state, 
            //     isSignout: true,
            //     userToken: null,   
            // }
        case 'LOG_OUT':
            return{...state, 
                isSignout: true,
                userToken: null,   
            }
        default:
            return state;
    }
}

export default authReducers;