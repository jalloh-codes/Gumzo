import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../authantication/Signup';
import Login from '../authantication/Login';
import Forgot from '../authantication/Forgot';
import Loading from '../authantication/Loading';
const Stack = createStackNavigator();


const Screens =  ({navigation})=>{
    return(
    <Stack.Navigator headerMode='none'>
    <Stack.Screen name="loading" component={Loading}  />
    <Stack.Screen name="login" component={Login}  options={{title: "Login", header: null}} />
    <Stack.Screen name="signup" component={Signup} options={{title: "Signup", header: null}}/>
    <Stack.Screen name="forgot" component={Forgot} options={{title: "Re Reset Password", header: null}}/>
  </Stack.Navigator>
    )
  };

  export default Screens;