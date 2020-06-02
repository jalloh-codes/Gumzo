import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage'
export const detectLogin= async (props)=>{
    const token = await AsyncStorage.getItem('@storage_Key')
        if(token){
              props.navigation.replace("main")
        }else{
          AsyncStorage.removeItem('@storage_Key').then(()=>{
            props.navigation.replace("auth", {screen: 'login'})
          })
          
        }
  }
