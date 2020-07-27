  
import React,{useEffect} from 'react';
import {detectLogin} from './auth';
import {
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';


const Loading = (props) => {


  useEffect(()=>{
   detectLogin(props)
  },[])

  return (
   <View style={styles.loading}> 
    <ActivityIndicator size="large" color="blue" />
   </View>
  );
};


const styles= StyleSheet.create({
    loading:{
     flex:1,
    justifyContent:"center",
    alignItems:"center" 
    }
    
  })


export default Loading;