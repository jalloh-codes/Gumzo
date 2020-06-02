import React,{useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../AuthNavigation/AuthNavigation';
import Tabs from '../HomeNavigation/HomeNavigation'
import AsyncStorage from '@react-native-community/async-storage'
const RootStack = createStackNavigator();

const RootSctackScreen = ({navigation}) =>{

  let userToken;
    useEffect(() =>{
      strapAsync = async () =>{
        try{
          userToken = await AsyncStorage.getItem('@storage_Key');
        }catch(e){
          console.log({e});
          
        }
      };
      strapAsync();
    }, [])
    console.log({userToken});
    
    return(
    <RootStack.Navigator>
       <RootStack.Screen name="auth" component={Screens} options={{title: ""}}/>
      <RootStack.Screen name="main"  component={Tabs}    options={{title: ""}}/>
    </RootStack.Navigator>
    )
  };


  export default RootSctackScreen;