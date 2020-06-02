import React, {Component} from 'react'
import { StyleSheet,View,Text, TouchableOpacity, TextInput} from 'react-native';
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            search:  ''
        }
    }

    render(){
        return(
            <View>
                <View style={styles.inputView}>
                    <TextInput 
                        placeholder="Search user" 
                        style={styles.input}
                        value={this.state.search}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputView:{
        marginTop: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: '#009632',
        width: 'auto'

     },
     input:{
        margin: 7,
         borderWidth: 3,
         borderRadius: 10,
         height: 60,
         width: 400,
         paddingLeft: 4,
         borderColor: '#eaffdb',
         backgroundColor: '#f2f7f7',
         color: '#000'
     },
  });

  export default Search;