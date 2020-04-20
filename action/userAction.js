import axios from  '../axios/axios';
import {Redirect} from "react-router-native";



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


const _logIn = (user) =>({
    type: 'LOG_IN',
    user
})

export const logIn = (userData = {
    username: '',
    password: ''
})=>{
    return(dispatch) =>{
        const user ={
            username: userData.username,
            password: userData.password
        };
        return axios.post('/gumzo/login', user)
            .then(result =>{
                
            
                const tokenData = [];


                tokenData.push(result.data)
                dispatch(_logIn(result.data))
                // dispatch(_logIn(tokenData)
                
            })
    }
}

