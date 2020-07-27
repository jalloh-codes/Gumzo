  
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
// const myIcon1 = <Icon name="comments" size={20} color="#900" />
import AsyncStorage from '@react-native-community/async-storage';
class  Home extends Component{



    render(){ 
        return (
            <View style={styles.container}>
                <Text>Welcome </Text>
                <Text>to Home Screen</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
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
    },
});



export default Home;