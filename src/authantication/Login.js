  
import React, { Component } from 'react';
import { StyleSheet,View,Text, TouchableOpacity, TextInput} from 'react-native';
import {detectLogin} from '../auth';
import AsyncStorage from '@react-native-community/async-storage'
import {logIn} from '../../action/authAction';
import {connect} from 'react-redux';
class Login extends Component {

    constructor(props){
        super(props);
        this.state ={
          username: '',
          password: '',
          error: '',
          reset: 'Forgot password'
        }
        this.sendLogin = this.sendLogin.bind(this);
      }
    
        sendLogin = () =>{
            this.state.error = ''
            if(!this.state.username || !this.state.password){
                this.setState({error: "Username Or Password is empty"})
            }else{ 
                let data = {
                    username: this.state.username,
                    password: this.state.password
                  }
              try{
                this.props.logIn(data)
                .then(async (result) =>{
                    this.state.error = ''
                    if(result.data.success == true){
                        await AsyncStorage.setItem('@storage_Key', result.data.token)
                        this.props.navigation.replace('main',  {screen: 'home'}) 
                    }
                })        
                .catch(err =>{
                    this.setState({error: 'Username or Password is incorrect'})
                })
              }
              catch(error){
                console.log({error})
              }
            }
             
          }
    render(){
        return (
        <View style={styles.Firstpage}>
            <View style={styles.errorBox}>
                <Text style={styles.errorText}>{this.state.error}</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    placeholder="Username"
                    autoCapitalize = "none"
                    style={styles.input}
                    value={this.state.username}                  
                    placeholderTextColor = "#0a8eff"
                    onChangeText={(username) => this.setState({username})}/>
        
                <TextInput 
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                    placeholderTextColor = "#0a8eff"
                    style={styles.input}/>
                
                <TouchableOpacity
                style={styles.btn}
                onPress={() => this.sendLogin()}>
                <Text  style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.linkBox}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate("signup")}>    
                <Text style={styles.linkText}>Create an account</Text> 
                
            </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.forgot}
                onPress={() => this.props.navigation.navigate("forgot")}>
                <Text style={styles.errorText}>{this.state.reset}</Text>
            </TouchableOpacity>
           
        </View>
        );
    }
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

  const mapStateToProps = (state) =>{
    return{
      user: state.authReducer
    }
  }

export default connect(mapStateToProps,{logIn})(Login);

