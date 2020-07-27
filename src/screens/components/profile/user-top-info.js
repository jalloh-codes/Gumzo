import React, {Component}  from 'react';
import { StyleSheet,View,Text, TouchableOpacity,
    Alert, ImageBackground, Image, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Buttons from './button';

class Profile extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout  = () =>{
        AsyncStorage.removeItem('@storage_Key').then(()=>{
            this.props.navigation.navigate("Auth", {screen: "login"})  ;
        })
    }



    render(){
     
        
        return(
            <View style={styles.container}>   
               <View style={styles.top}>
                   <View style={styles.image}>
                   </View>
                   <View style={styles.name}>
                       <TouchableOpacity>
                           <Text>{this.props.username}</Text>
                       </TouchableOpacity>
                   </View>
               </View>
               <View style={styles.bio}>
                    <Text>
                        Bio
                    </Text>
               </View>
               <View style={styles.bottom}>
                   <View style={styles.list}>
                        <Buttons e={'Infromation'}/>
                        <Buttons e={'Setting'}/>
                        <Buttons e={'Reset Password'}/>
                   </View>
               </View>
            </View>
        );
    }
  }


  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column'
    },
    top:{
        justifyContent: 'center',
        backgroundColor: '#a4fcf1',
        width: '100%',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
    },
    image:{
        justifyContent: 'center',
        borderWidth: 1,
        width: 125,
        height: 125,
        marginTop: "25%",
        marginBottom: '1%',
        borderRadius: 40
    },
    names:{
        justifyContent: 'center'
    },
    bottom:{
        width: '100%',
        borderColor: '#000',
        marginTop: 5,
        padding: 10,
    },
    bio:{
        backgroundColor: '#a8a8ff',
        marginTop: 5,
        padding: 15,
        fontSize: 25,
        width: '100%',
        height:'15%',
        maxHeight: '17%'
    },
    list:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: '1%',
        marginRight: '1%'
    },
  });


  const mapStateToProps = (state) =>{
    return{
      user: state.authReducer
    }
  }

export default Profile;