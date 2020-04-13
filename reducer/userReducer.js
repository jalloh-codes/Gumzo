const usersReducer = [];
const  userReducer = (state = usersReducer, action) =>{
    switch (action.type) {
        case 'ADD_USER':
            return[
                ...state,
                action.user
            ];
        case 'DELETE_USER':
            return state.filter(({id}) => id !== action.id);
        case 'GET_USERS':
            return action.users
        default:
            return state;
    }
};

export default userReducer;