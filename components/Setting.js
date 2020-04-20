import React from 'react';
import {StyleSheet, View, Text, AsyncStorage} from 'react-native';

export default class Setting extends React.Component {

    constructor() {
        super();
        this.state = {
            token: ''
        };
        this._bootstrap();
    }

    _bootstrap = async () => {
        const token = await AsyncStorage.getItem('userName');
        this.setState({token: token});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome {this.state.token}</Text>
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