import React,{useEffect,useState} from 'react';
import AsyncStorage from  '@react-native-community/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from './components/Signup'
import Login from './components/Login'
import Loading from './components/Loading';
import Home from './components/Home'
import Forgot from './components/Forgot';


const Stack = createStackNavigator();

const App= ({ navigation }) => {
   const [isloggedin,setLogged] = useState(null)

   const detectLogin= async ()=>{
      const token = await AsyncStorage.getItem('@storage_Key')
      if(token){
          setLogged(true)
      }else{
          setLogged(false)
      }
   }
  useEffect(()=>{
     detectLogin()
  },[])


  return (
    <NavigationContainer>
      <Stack.Navigator>
 
            <Stack.Screen name="loading" component={Loading} />
            <Stack.Screen name="home" component={Home} options={{title: "Gumzo"}}/>
            <Stack.Screen name="login" component={Login}  options={{title: "Login"}}/>
            <Stack.Screen name="signup" component={Signup} options={{title: "Signup"}}/>
            <Stack.Screen name="forgot" component={Forgot} options={{title: "Re Reset Password"}}/>
           
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;