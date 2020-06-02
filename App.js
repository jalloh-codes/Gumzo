import React,{useState} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import RootSctackScreen from './src/RootStack/RootStack'


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