import React, { Component } from 'react';
import { StyleSheet,View,Text, TouchableOpacity, TextInput} from 'react-native';
import Search from '../components/search'
import AsyncStorage from '@react-native-community/async-storage';
import {getContacts} from '../../action/userAction';
import {connect} from 'react-redux';
import decode from 'jwt-decode';
class MessagesList extends Component {

    constructor(props){
        super(props);
        this.state ={
            setToken: '',
            userID: '',
            username: '',
            id: '',
        }
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

    async componentDidMount(){
        //this.props.getContacts()
          this.getToken()
  
    }
    render(){
        return(
            <View>   
                <View>
                    <Search />
                    <Text>{this.state.username}</Text>
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
    }
  });

const mapStateToProps = (state) =>{
    return{
        contacts: state.contacts.user
    }
}

export  default connect(mapStateToProps, {getContacts})(MessagesList);