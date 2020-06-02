import React, {Component } from 'react';
import { StyleSheet,View,Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
class Profile extends Component {

    // GetDat = async = ()=>{

    // }

    render(){
        return(
            <View>   
                <View>
                <Text>Sitting</Text>
                </View>
            </View>
        );
    }
  }


  const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#0a8eff',
        alignSelf: 'center',
        width: 100,
        fontSize: 40,
        padding: 15,
        borderRadius: 20,
       color: '#1b1d1f',
    },
    btnText:{
        alignSelf: 'center',
        color: '#fff',
        padding: 4,
        color: '#1b1d1f'
    }
  });


  export  default Profile;