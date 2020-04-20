import React,{useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Forgot = (props) => {

    const [resetPassword, setResetPassword ] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
  return (
   <View style={styles.Firstpage}> 
        <View style={styles.errorBox}>
        <Text style={styles.errorText}>{error}</Text>
        </View>
    <View style={styles.inputView}>
        <TextInput 
        placeholder="New Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={styles.input}/>

        <TextInput 
        placeholder="Reenter Password"
        value={resetPassword}
        onChangeText={text => setResetPassword(text)}
        secureTextEntry={true}
        style={styles.input}/>

         
        <TouchableOpacity
        style={styles.btn}
        onPress={() => sendLogin(props)}>
        <Text  style={styles.btnText}>Login</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.linkBox}>
            <TouchableOpacity onPress={() => props.navigation.replace("login")}>
                <Text style={styles.linkText}>Log in</Text>             
            </TouchableOpacity>
        </View>
   </View>
  );
};


const styles= StyleSheet.create({
    Firstpage:{
        alignItems: "center",
        backgroundColor: '#fcfcfc',
        flex: 1,
        flexDirection: 'column'
    },
    inputView:{
        marginTop: 200,
        marginTop: 50,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
     },
    input:{
        margin: 5,
        borderWidth: 3,
        borderRadius: 20,
        height: 60,
        width: 320,
        paddingLeft: 4,
        borderColor: '#eee',
        backgroundColor: '#f2f7f7',
        color: '#0d0c0c'
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
    errorBox:{
       
        marginTop: 200,
    },
    errorText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff4517',
    },
    linkText:{
        color: '#00756c',
        fontWeight: '700',
        fontSize: 18
    },
    linkBox:{
        marginTop: 40
    },
    
  })


export default Forgot;