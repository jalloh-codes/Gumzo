import AsyncStorage from '@react-native-community/async-storage'
export const detectLogin= async (props)=>{
    const token = await AsyncStorage.getItem('@storage_Key')
    
        if(token){
            props.navigation.replace('Main', {screen: 'home'})
        }else{
            props.navigation.replace('Auth', {screen: 'login'})
        }
  }