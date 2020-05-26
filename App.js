import React,{useState} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Signup from './components/Signup'
import Login from './components/Login'
import Loading from './components/Loading';
import Home from './components/Home'
import Forgot from './components/Forgot';
import Profile from './components/Profile';
import Sitting from './components/Setting';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
 //import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const Tabs = ({navigation}) =>{
  return(
    <Tab.Navigator headerMode='none'initialRouteName="home" >
      <Tab.Screen name="home" component={Home} 
        options={{tabBarLabel: 'Home',
        tabBarIcon: () =>(
          <Icon name="home" size={20} color="firebrick" />
        )
      }}/>
      <Tab.Screen name="profile" component={Profile}
      options={{tabBarLabel: 'Profile',
      tabBarIcon: () =>(
        <Icon name="user"  size={20} color="firebrick" />
      )
      }}/>
      <Tab.Screen name="sitting" component={Sitting} 
      options={{tabBarLabel: 'Setting',
      tabBarIcon: () =>(
        <Icon name="cog" size={20} color="firebrick" />
      )
      }}/>
    </Tab.Navigator>
  )
}

const Screens =  ({navigation})=>{
  return(
  <Stack.Navigator headerMode='none'>
  <Stack.Screen name="loading" component={Loading} />
  <Stack.Screen name="login" component={Login}  options={{title: "Login"}}/>
  <Stack.Screen name="signup" component={Signup} options={{title: "Signup"}}/>
  <Stack.Screen name="forgot" component={Forgot} options={{title: "Re Reset Password"}}/>
</Stack.Navigator>
  )
};


const RootSctackScreen = ({navigation}) =>{

  
  return(
  <RootStack.Navigator>
     <RootStack.Screen name="auth" component={Screens} options={{title: ""}}/>
    <RootStack.Screen name="main"  component={Tabs}    options={{title: ""}}/>
  </RootStack.Navigator>
  )
};

const App= ({ navigation }) => {
   const [isloggedin,setLogged] = useState(null)


  return (

    <NavigationContainer >
      <RootSctackScreen  isloggedin={isloggedin}/>
    </NavigationContainer>

  );
};

  const styles = StyleSheet.create({
    btn:{
      backgroundColor: "#0a8eff",
      color: "#1b1d1f",
    },
  })


export default App;