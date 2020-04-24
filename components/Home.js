  
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome';


const  Home = (props)=> {
    const logout =  (props) =>{
        AsyncStorage.removeItem('@storage_Key').then(()=>{
            props.navigation.replace("auth",  {screen: 'login'})  
        })
    }

    return (
        <View style={styles.container}>
            <Text>Welcome </Text>
            <Text>to Home Screen</Text>

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