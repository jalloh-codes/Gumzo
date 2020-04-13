import axios from  '../axios/axios';




const _addUser = (user) =>({
    type: 'ADD_USER',
    user
})

export const addUser = (userData = {
    username: '',
    password: '',
    userID: ''
})=>{
    return(dispatch) =>{
        const user ={
            username: userData.username,
            password: userData.password,
            userID: userData.userID
        };
        return axios.post('/gumzo/create', user)
            .then(result =>{
                dispatch(_addUser(result.data))
            })
    }
}

const _deleteUser = ({id} = {}) =>({
    type: 'DELETE_USER',
    id
})

export const deleteUser = ({id} = {})=>{
    return (dispatch) =>{
        return axios.delete(`/user/${id}`).then(() =>{
            dispatch(_deleteUser({id}))
        })
    }
};

const _getUsers = (users) => ({
    type: 'GET_USERS',
    users
})

export const getUsers =()=>{
    return(dispatch)=>{
        return axios.get('/gumzo/users').then(result =>{
            const users = [];

            result.data.forEach(user => {
                users.push(user)
            });

            dispatch(_getUsers(users))
        })
    }
}

