import React,{useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../AuthNavigation/AuthNavigation';
import Tabs from '../HomeNavigation/HomeNavigation'
import AsyncStorage from '@react-native-community/async-storage';

const RootStack = createStackNavigator();

const RootSctackScreen = ({navigation}) =>{

  const [login, setLogin] = useState(false);


  const isLogin = async () =>{
      let token = await AsyncStorage.getItem('@storage_Key');
      if(token){
        setLogin(true)
      }
  }

  useEffect(  () =>{
    setTimeout(() =>{
      isLogin();
    }, 100)
  }, []);

  return(
    <RootStack.Navigator>
      <RootStack.Screen name="Auth" component={Screens} options={{title: ""}}/>
      <RootStack.Screen name="Main"  component={Tabs} options={{title: ""}}/>
    </RootStack.Navigator>
  )
};


  export default RootSctackScreen;