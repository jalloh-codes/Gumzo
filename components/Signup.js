import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, 
  View,Text,StatusBar, 
  FlatList, TextInput, TouchableOpacity} from 'react-native';
import {getUsers, addUser} from '../action/userAction';
import {connect} from 'react-redux';
import {Link} from "react-router-native";
class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
      userID: '',
      error: []
    }

  }

  componentDidMount(){
    this.props.getUsers();
  }


  
  onSubmit =(e) =>{
      
    this.state.error = []
    if(!this.state.username || !this.state.password || !this.state.userID){
      let add = this.state.error.concat('Username or Password or UserID is empty')
      this.setState(state =>({
        error: state.error.concat(add)
      }))
    }else{
      let newData = {
        username: this.state.username,
        password: this.state.password,
        userID: this.state.userID
       
      }
      try{
         this.props.addUser(newData)
      }catch(err){
        throw err;
      }
    }
  }


  render(){    
    
    return(
      <View style={styles.signup}>
        <View style={styles.nameView}>
            <Text style={styles.name}>Sign up</Text>
        </View>
        <FlatList
        data={this.state.error}  
          renderItem={({item}) => <Text key={item}>{item}</Text>
        }/>
        <View>
            <TextInput 
                placeholder="Username"
                style={styles.input}
                value={this.state.username}
                onChangeText={username => this.setState({username})}
            />
            <TextInput 
                placeholder="User ID"
                style={styles.input}
                value={this.state.userID}
                onChangeText={userID => this.setState({userID})}
            />
            
            <TextInput 
                placeholder="Password"
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                secureTextEntry={true}
                style={styles.input}  
            />
            
            <TouchableOpacity
              onPress={() => this.onSubmit()} 
              style={styles.btn}>
            <Text  style={styles.btnText}>Sign up</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.linkBox}>
            <TouchableOpacity>
                <Link to="/">
                <Text style={styles.linkText}>Log in</Text> 
                </Link>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  signup:{
    alignItems: "center",
   
  },
  nameView:{
    marginTop: 150,
    marginBottom: 20
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



const mapStateToProps = (state) =>{
  return{
    users: state.userReducer
  }
}

export default connect(mapStateToProps, {getUsers, addUser})(Signup);