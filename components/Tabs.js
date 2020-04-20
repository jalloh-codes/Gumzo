import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Tabs = ()=> {

    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <Text>to Setting Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      bottom: 0,
      backgroundColor: 'red',
      height: 40,
      overflow: 'hidden'
    },
    text:{
      fontSize: 50,
      color: 'red',
    }
});

export default Tabs;