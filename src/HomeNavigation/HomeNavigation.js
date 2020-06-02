import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Profile from '../screens/Profile';
import Sitting from '../screens/Setting';
import MessagesList from '../screens/MessagesList';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const Tab = createBottomTabNavigator();


const Tabs = ({navigation}) =>{
    return(
      <Tab.Navigator headerMode='none'initialRouteName="home" >
        <Tab.Screen name="home" component={Home} 
          options={{tabBarLabel: 'Home',
          tabBarIcon: () =>(
            <Icon name="home" size={25} color="#009632" />
          )
        }}/>
        <Tab.Screen name="profile" component={Profile}
        options={{tabBarLabel: 'Profile',
        tabBarIcon: () =>(
          <Icon name="user"  size={25} color="#009632" />
        )
        }}/>
       
        <Tab.Screen name="message" component={MessagesList} 
        options={{tabBarLabel: 'Messages',
        tabBarIcon: () =>(
          <Icon name="inbox" size={25} color="#009632" />
        )
        }}/>
  
      <Tab.Screen name="setting" component={Sitting} 
        options={{tabBarLabel: 'Setting',
        tabBarIcon: () =>(
          <Icon name="cog" size={25} color="#009632" />
        )
        }}/>
      </Tab.Navigator>
    )
  }

  export default Tabs