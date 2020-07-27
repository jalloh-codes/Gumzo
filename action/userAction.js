export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const  GET_CONTACTS_FAIL = 'GET_CONTACTS_SUCCESS'
export const GET_USER_INFO = 'GET_USER_INFO';
import axios from 'axios'

const url = 'http://localhost:8080/api/auth/';
export const getContacts = (id) =>{
    return async dispatch =>{
        const result = await fetch(`${url}/contacts/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        await result.json().then(res => 
            dispatch({
                type:  GET_CONTACTS_SUCCESS,
                payload: res[0]
            })
            
        )

        //return resultData
        // if(resultData[0]){
        //     console.log(resultData[0]);
        // }
        

        

        
        // if(resultData.status === 200){
        //     dispatch({
        //         type:  GET_CONTACTS_SUCCESS,
        //         payload: resultData[0]
        //     })
        // }
        //else{
        //     dispatch({
        //         type:  GET_CONTACTS_FAIL,
        //     })
        // }

    }

}

// export const getContacts = () => dispatch =>{
//     axios.get('http://localhost:8080/api/auth/contacts')
//     .then((res) => {
//         //console.log({res});
        
//         dispatch({
//         type: GET_CONTACTS_SUCCESS,
//         payload: res.data
//     })})
// }