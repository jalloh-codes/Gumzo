export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';



const url = 'http://localhost:8080/api/auth'
export const registerUser = (authData) =>{
    const {username, password, userID} = authData;

    return async dispatch =>{

        const result = await fetch(`${url}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                userID
            })
        })

        const resultData = await result.json();

        if(resultData.success){
            dispatch({
                type:  REGISTER_USER_SUCCESS,
                payload: 1
            })
        }else{
            dispatch({
                type:  REGISTER_USER_FAIL,
            })
        }

        return resultData;
   
    }

}
export const loginUser = (authData) =>{
    const {username, password} = authData;

    return async dispatch =>{
        const result = await fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        })

        const resultData = await result.json();


        
        if(resultData.success){
            dispatch({
                type:  LOGIN_USER_SUCCESS,
                payload: 1
            })
        }else{
            dispatch({
                type:  LOGIN_USER_SUCCESS,
            })
        }

        return resultData;
    }

}