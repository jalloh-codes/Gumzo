import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class Setting extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome </Text>
                <Text>to Setting Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});