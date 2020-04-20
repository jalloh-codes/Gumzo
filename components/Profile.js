import React, { useState, useEffect } from 'react';
import { StyleSheet, 
  View,Text, TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
  import { Redirect} from "react-router-native";

const Profile = (props)=> {

    const [islogin, setLogin] = useState(null); 
    const[username, setUsername]  =useState('');

    const Boiler = async ()=>{
        const token = await AsyncStorage.getItem('@storage_Key')
        fetch('http://localhost:8080/api/gumzo/user/auth',{
            headers:new Headers({
                Authorization:"Beare "+token
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data.username)
            setUsername(data.username)
        }
        )
     }

     
     const detect = async ()=>{
        const value = await  AsyncStorage.getItem('@storage_Key');
         if(value){
             setLogin(true)
         }else{
             //await AsyncStorage.removeItem('@storage_Key');
             setLogin(false)
         }

         console.log(value);
         
     }

     useEffect(()=>{
        Boiler()
        // detect()
     },[])

     const logout = ()=>{
          setLogin(false)
     }
    

    return(
        <View>   
            <View>
            <Text>{username}</Text>
            </View>
             <TouchableOpacity
                style={styles.btn}
                onPress={() => logout()}>
                <Text  style={styles.btnText}>Logout</Text>
                </TouchableOpacity>
        </View>
    );
  }


  const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#0a8eff',
        alignSelf: 'center',
        width: 100,
        fontSize: 40,
        padding: 15,
        borderRadius: 20,
       color: '#1b1d1f',
    },
    btnText:{
        alignSelf: 'center',
        color: '#fff',
        padding: 4,
        color: '#1b1d1f'
    }
  });


  export  default Profile;