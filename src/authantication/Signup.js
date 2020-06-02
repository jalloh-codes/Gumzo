import React, {Component} from 'react';
import {StyleSheet, 
  View,Text, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {signUp} from '../../action/authAction';

class Signup extends Component{
  constructor(props){
    super(props);
    this.state ={
      username: '',
      userID: '',
      password: '',
      error: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.sendSignUp = this.sendSignUp.bind(this);
  }

  handleInput(e){
    this.setState({[e.target.name]: e.target.value});
  }
  // const signUp= async (props)=>{
  //   setError('')
  //   if(!username || !userID || !password){
  //     setError("Username Or Password is empty")
  //   }else{
  //     fetch("http://localhost:8080/api/gumzo/create",{
  //       method:"POST",
  //       headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify({
  //       "username":username,
  //       "userID":userID,
  //       "password":password
  //     })
  //     })
  //     .then(res=>res.json())
  //     .then(async (data)=>{
  //           try {   
  //             props.navigation.navigate("login")
  //           } catch (e) {
  //             console.log(e)
  //           }
  //     })
  //   }
  // }
  
    sendSignUp = () =>{
      this.state.error = ''
      if(!this.state.username || !this.state.userID || !this.state.password){
        this.setState({error: "Username Or Password Or userID is empty"})
      }else{
        let data = {
          username: this.state.username,
          userID: this.state.userID,
          password: this.state.password
        }
          
        try{
          this.props.signUp(data)
          .then(result =>{
            this.state.error = ''
            this.props.navigation.navigate("login")
          })        
          .catch(err =>{
           this.setState({error: 'User already excisted'})
          })
        }
        catch(error){
          console.log({error})
        }
      }
       
    }
  
    render(){
      return(
        <View style={styles.signup}>
          <View style={styles.errorBox}>
                  <Text style={styles.errorText}>{this.state.error}</Text>
            </View>
          <View style={styles.inputView}>
              <TextInput 
                  placeholder="Username"
                  autoCapitalize = "none"
                  style={styles.input}
                  value={this.state.username}
                  onChangeText={(username) => this.setState({username})}
                  placeholderTextColor = "#0a8eff"
              />
              <TextInput 
                  placeholder="User ID"
                  placeholderTextColor = "#0a8eff"
                  autoCapitalize="none"
                  style={styles.input}
                  value={this.state.userID}
                  onChangeText={(userID) =>this.setState({userID})}
              />
              
              <TextInput 
                  placeholder="Password"
                  placeholderTextColor = "#0a8eff"
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry={true}
                  style={styles.input}  
              />
              
              <TouchableOpacity
                onPress={() => this.sendSignUp()} 
                style={styles.btn}>
              <Text  style={styles.btnText}>Sign up</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.linkBox}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("login")}>
                  <Text style={styles.linkText}>Log in</Text>             
              </TouchableOpacity>
          </View>
        </View>
      );
    }
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

const mapStateToProps = (state) =>{
  return{
    user: state.authReducer
  }
}

export default connect(mapStateToProps,{signUp})(Signup);