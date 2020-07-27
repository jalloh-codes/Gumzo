import React, {Component } from 'react';
import { StyleSheet,View,Text, Button, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import TopInfo from './components/profile/user-top-info';
import Buttons from './components/profile/button';
import decode from 'jwt-decode';
import {getContacts} from '../../action/userAction';
import {connect} from 'react-redux'
class Profile extends Component {

    constructor(props){
        super(props);
        this.state ={
            setToken: '',
            userID: '',
            username: '',
            id: '',
        }
    }


    async componentDidMount(){
      //this.props.getContacts()
        this.getToken()

    }


    getToken = async () =>{
         await AsyncStorage.getItem('@storage_Key').then((tk) =>{

            this.setState({setToken: tk})
            let deco = decode(tk)
            this.props.getContacts(deco._id)
            this.setState({userID: deco.userID})
            this.setState({username: deco.username})
            this.setState({id: deco._id})
        })
    }


    logout  = () =>{
        try {
            AsyncStorage.removeItem('@storage_Key').then(()=>{
                this.props.navigation.replace("Auth", {screen: "login"})  ;
            })
        }catch (error) {
        
        }
    }


    render(){    
        console.log(this.props.contacts.contact);
        
        return(
            <View>   
                <View style={styles.topInfo}>
                    <TopInfo username={this.state.username}/>
                </View>
                <View style={styles.bottomInfo}>
               
                </View>
                <View style={styles.btnBox}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => this.logout()}>
                        <Text style={styles.text}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
  }


  const styles = StyleSheet.create({
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
    btnBox:{
        alignItems: 'center',
    },
    button:{
        marginBottom: 5,
        height: 60,
        backgroundColor:'#1a8be8',
        shadowColor: "#000000",
        shadowOpacity: 1.9,
        shadowRadius: 3,
        borderRadius: 10,
        justifyContent: 'space-around',
        shadowOffset: {
          height: 4,
          width: 4
        }
    },
    text:{
        fontSize: 20,
        fontWeight: '500',
        padding: 20,
    }
  });


  const mapStateToProps = (state) =>{
      return{
          contacts: state.contacts.user
      }
  }


  export  default connect(mapStateToProps, {getContacts})(Profile);