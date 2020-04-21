import React, {useState} from 'react';
import {StyleSheet, 
  View,Text, TextInput, TouchableOpacity} from 'react-native';
const Signup = (props) =>{

  const[username, setUsername] = useState('');
  const[userID, setUserid] =useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const signUp= async (props)=>{
    setError('')
    if(!username || !userID || !password){
      setError("Username Or Password is empty")
    }else{
      fetch("http://localhost:8080/api/gumzo/create",{
        method:"POST",
        headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "username":username,
        "userID":userID,
        "password":password
      })
      })
      .then(res=>res.json())
      .then(async (data)=>{
            try {   
              props.navigation.replace("login")
            } catch (e) {
              console.log(e)
            }
      })
    }
  }
  

    
    return(
      <View style={styles.signup}>
        <View style={styles.errorBox}>
                <Text style={styles.errorText}>{error}</Text>
          </View>
        <View style={styles.inputView}>
            <TextInput 
                placeholder="Username"
                style={styles.input}
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput 
                placeholder="User ID"
                style={styles.input}
                value={userID}
                onChangeText={text => setUserid(text)}
            />
            
            <TextInput 
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                style={styles.input}  
            />
            
            <TouchableOpacity
              onPress={() => signUp(props)} 
              style={styles.btn}>
            <Text  style={styles.btnText}>Sign up</Text>
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

const styles = StyleSheet.create({
  signup:{
    alignItems: "center",
    backgroundColor: '#fcfcfc',
    flex: 1,
    flexDirection: 'column'
   
  },
  inputView:{
    marginTop: 50,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
 },
 name:{
  fontSize: 40,
  fontWeight: '900',
  
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
        marginTop: 10
    },
    errorBox:{
       
      marginTop: 200,
    },
    errorText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff4517',
    }

});

export default Signup;