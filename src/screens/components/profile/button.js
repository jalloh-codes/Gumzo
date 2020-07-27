import React from 'react';
import {StyleSheet, Text, TouchableOpacity,} from 'react-native';


const Buttons = (props) =>{
    return(
    <TouchableOpacity style={styles.button} onPress={ () => props.onPress}>
        <Text style={styles.text}>{props.e}</Text>
    </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button:{
        width: '100%',
        marginBottom: 5,
        height: 60,
        paddingLeft: 10,
        backgroundColor:'#d9d9d9',
        shadowColor: "#000000",
        shadowOpacity: 1.9,
        shadowRadius: 3,
        borderRadius: 10,
        justifyContent: 'space-around',
        shadowOffset: {
          height: 4,
          width: 4
        }
    },
    text:{
        fontSize: 20,
        fontWeight: '500',
        padding: 11,
    }
});

export default Buttons;