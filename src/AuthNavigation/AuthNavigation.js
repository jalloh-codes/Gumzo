import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../authantication/Signup';
import Login from '../authantication/Login';
import Forgot from '../authantication/Forgot';
import Loading from '../Loading';
const Stack = createStackNavigator();


const Screens =  ({navigation})=>{
    return(
    <Stack.Navigator headerMode='none'>
    {/* <Stack.Screen name="loading" component={Loading} /> */}
    <Stack.Screen name="login" component={Login}  options={{title: "Login"}}/>
    <Stack.Screen name="signup" component={Signup} options={{title: "Signup"}}/>
    <Stack.Screen name="forgot" component={Forgot} options={{title: "Re Reset Password"}}/>
  </Stack.Navigator>
    )
  };

  export default Screens;