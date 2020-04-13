  
import React, { useState } from 'react';
import { StyleSheet, 
  View,Text, TouchableOpacity, TextInput} from 'react-native';
import {Link} from "react-router-native";
const Login = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');


    return (
      <View style={styles.Firstpage}>
        <View style={styles.nameView}>
            <Text style={styles.name}>Gumzo</Text>
        </View>
        <View>
            <TextInput 
                placeholder="Username"
                style={styles.input}
                value={username}
                onChangeText={e => setUsername(e.target.value)}/>
    
            <TextInput 
                placeholder="Password"
                value={password}
                onChangeText={e => setPassword(e.target.value)}
                secureTextEntry={true}
                style={styles.input}/>
            
            <TouchableOpacity
            style={styles.btn}>
            <Text  style={styles.btnText}>Sign up</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.linkBox}>
            <TouchableOpacity>
                <Link to="/signup">
                <Text style={styles.linkText}>Create an account</Text> 
                </Link>
            </TouchableOpacity>
        </View>
      </View>
    );
  };


  const styles = StyleSheet.create({
    Firstpage:{
        alignItems: "center",
    },
    nameView:{
       marginTop: 200
    },
    name:{
        fontSize: 40,
        fontWeight: '900',
        
    },
    input:{
        margin: 5,
        borderWidth: 2,
        borderRadius: 20,
        height: 60,
        width: 320,
        paddingLeft: 4,
        borderColor: '#eee',
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
    linkText:{
        color: '#00756c',
        fontWeight: '700',
        fontSize: 18
    },
    linkBox:{
        marginTop: 10
    }
  });
  export default Login;