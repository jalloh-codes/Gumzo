import axios from '../axios/axios';
import AsyncStorage from '@react-native-community/async-storage';

const _signUp = (user) =>({
    type: 'SIGN_UP',
    user
})

export const signUp = (data ={
    username: '',
    userID: '',
    password: '',
}) =>{
    return(dispatch) =>{
        const user = {
            username: data.username,
            userID: data.userID,
            password: data.password
        };
        return axios.post('/create', user)
            .then(result =>{
                dispatch(_signUp(result.data)) 
            })
    }
}

const _lognIn = (user) =>({
    type: 'LOG_IN',
    user
})

export const logIn = (data ={
    username: '',
    password: '',
}) =>{
    return(dispatch) =>{
        const user = {
            username: data.username,
            password: data.password
        };
        return axios.post('/login', user)
            .then(result =>{
                return(result)
                
            })
    }
}