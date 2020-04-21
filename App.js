import React,{useEffect,useState} from 'react';
import AsyncStorage from  '@react-native-community/async-storage' 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Signup from './components/Signup'
import Login from './components/Login'
import Loading from './components/Loading';
import Home from './components/Home'
import Forgot from './components/Forgot';
import Profile from './components/Profile';
import Sitting from './components/Setting';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const Tabs = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="profile" component={Profile} />
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


const RootSctackScreen = ({isloggedin}) =>{
  console.log(isloggedin);
  
  return(
  <RootStack.Navigator>
     {isloggedin  == false? (
      <>
      <RootStack.Screen name="login" component={Screens} options={{title: ""}}/>
     </>
    ):(
      <>
       <RootStack.Screen name="home"  component={Tabs}    options={{title: ""}}/>
  
    </>
    )}
  </RootStack.Navigator>
  )
};

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
      <RootSctackScreen  isloggedin={isloggedin}/>
    </NavigationContainer>

  );
};


export default App;