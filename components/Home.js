  
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'



const  Home = (props)=> {



        //const token = await AsyncStorage.getItem('@storage_Key');

    const [userID,setUserID] = useState("loading")
    const Boiler = async ()=>{
        const token = await AsyncStorage.getItem('@storage_Key')
        fetch('http://localhost:8080/api/gumzo/user/auth',{
        headers:new Headers({
        Authorization:"Bearer "+token
        })
        }).then(res=>res.json())
        .then(data=>{
        setUserID(data.username)
        }
        )
    }

     useEffect(()=>{
        Boiler()
     },[])

    const logout =  (props) =>{
        AsyncStorage.removeItem('@storage_Key').then(()=>{
            props.navigation.replace("login")
        })
    }

    return (
        <View style={styles.container}>
            <Text>Welcome </Text>
            <Text>to Home Screen {userID}</Text>

            <TouchableOpacity style={styles.btn} onPress={() =>logout(props)}>
                <Text style={styles.btnText}>Logout</Text>
            </TouchableOpacity>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
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
    },
});

export default Home;