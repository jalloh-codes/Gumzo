import React,{useEffect,useState} from 'react';
import AsyncStorage from  '@react-native-community/async-storage' 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5";
import {detectLogin} from './components/auth';
import Signup from './components/Signup'
import Login from './components/Login'
import Loading from './components/Loading';
import Home from './components/Home'
import Forgot from './components/Forgot';
import Profile from './components/Profile';
import Sitting from './components/Setting';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const Tabs = () =>{
  return(
    <Tab.Navigator
    activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen name="home" component={Home} options={{
          tabBarLabel: 'home',
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="home" color={tintColor} size={26} />
          ),
        }}/>
      <Tab.Screen name="profile" component={Profile} options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="bell" color={tintColor} size={26} />
          ),
        }}/>
      <Tab.Screen name="sitting" component={Sitting} />
    </Tab.Navigator>
  )
}

const Screens =  ()=>{
  return(
  <Stack.Navigator>
  <Stack.Screen name="loading" component={Loading} />
  <Stack.Screen name="login" component={Login}  options={{title: "Login"}}/>
  <Stack.Screen name="signup" component={Signup} options={{title: "Signup"}}/>
  <Stack.Screen name="forgot" component={Forgot} options={{title: "Re Reset Password"}}/>
</Stack.Navigator>
  )
};


const RootSctackScreen = (props, {isloggedin}) =>{
  //console.log({isloggedin});
  //console.log(props.navigation);
  
  return(
  <RootStack.Navigator>
     <RootStack.Screen name="auth" component={Screens} options={{title: ""}}/>
    <RootStack.Screen name="main"  component={Tabs}    options={{title: ""}}/>
  </RootStack.Navigator>
  )
};

const App= ({ navigation }) => {
   const [isloggedin,setLogged] = useState(null)
   //console.log({navigation});
  //  const detectLogin= async ()=>{
  //     const token = await AsyncStorage.getItem('@storage_Key')
  //     //console.log({token: token});
      
  //     if(token){
  //         setLogged(true)
  //         //navigation.replace('main')
  //     }else{
  //         setLogged(false)
  //         //navigation.replace('auth')
  //     }
  //  }
  // useEffect(()=>{
  //    detectLogin()
  // },[])


  return (
    <NavigationContainer>
      <RootSctackScreen  isloggedin={isloggedin}/>
    </NavigationContainer>

  );
};

  const styles = StyleSheet.create({
    btn:{
      backgroundColor: '#0a8eff',
      color: '#1b1d1f',
    },
  })


export default App;