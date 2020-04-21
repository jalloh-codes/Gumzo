  
import React, { useState } from 'react';
import { StyleSheet,View,Text, TouchableOpacity, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'


const Login = (props)=> {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [reset, setReset] = useState("Forgot password");


        const sendLogin = async (props) =>{
            setError('')
            if(!username || !password){
              setError("Username Or Password is empty")
                
            }else{
                fetch("http://localhost:8080/api/gumzo/login", {
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        "username": username,
                        "password": password
                    })
                })
                .then(res =>res.json())
                .then(async (data)=>{
                    try{
                        await AsyncStorage.setItem('@storage_Key', data.token)                     
                        props.navigation.replace("home")                      
                    }catch(e){
                        console.log("errrr");                    
                    }
                })
            }
        }
        


        return (
        <View style={styles.Firstpage}>
            <View style={styles.errorBox}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    placeholder="Username"
                    style={styles.input}
                    value={username}
                    onChangeText={text => setUsername(text)}/>
        
                <TextInput 
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    style={styles.input}/>
                
                <TouchableOpacity
                style={styles.btn}
                onPress={() => sendLogin(props)}>
                <Text  style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.linkBox}>
            <TouchableOpacity
                onPress={() => props.navigation.replace("signup")}>    
                <Text style={styles.linkText}>Create an account</Text> 
                
            </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.forgot}
                onPress={() => props.navigation.replace("forgot")}>
                <Text style={styles.errorText}>{reset}</Text>
            </TouchableOpacity>
           
        </View>
        );
  };

  


  const styles = StyleSheet.create({
    Firstpage:{
        alignItems: "center",
        backgroundColor: '#fcfcfc',
        flex: 1,
        flexDirection: 'column'
    },
    inputView:{
       marginTop: 20,
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
    linkText:{
        color: '#00756c',
        fontWeight: '700',
        fontSize: 18
    },
    linkBox:{
        marginTop: 5
    },
    errorBox:{
       
        marginTop: 200,
    },
    forgot:{
        marginTop: 20,
    },
    errorText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff4517',
    }
  });

export default Login;

