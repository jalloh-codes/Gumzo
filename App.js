
import React, {Component} from 'react';
import {StyleSheet, 
  View,Text} from 'react-native';
import Login from './components/Login';
import { NativeRouter, Route, Link } from "react-router-native";
import Signup from './components/Signup';
import Main from './components/Main';
class App extends Component {
 
  render(){
    return ( 
      <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/Main" component={Main}/>
        </View>
     </NativeRouter>
    );
  }
};

const styles = StyleSheet.create({
  container:{
  
    paddingTop: 60,
  },
  name:{
    fontSize: 40,
    fontWeight: '900',
    alignSelf: "center"
  },
});



export default App;