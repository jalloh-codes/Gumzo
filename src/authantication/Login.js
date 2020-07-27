import React from 'react';
import { StyleSheet, ScrollView, 
    View, KeyboardAvoidingView, TextInput,
    Platform, Image, TouchableOpacity, Text, Alert} from 'react-native';
import { Formik } from "formik";
import * as yup from 'yup';
import * as authAction from '../../action/authAction';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const formShema  = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
})
const Login = (props) =>{


    const dispatch = useDispatch();
    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios"? "padding" : "height" } 
        style={{flex:1}}>
                <Formik 
                initialValues={{
                   username: "",
                   password: "", 
                }}
                validationSchema={formShema}
                onSubmit={(values) =>{
                    dispatch(authAction.loginUser(values))
                    .then(async result =>{
                        if(result.success){
                            try{
                                await AsyncStorage.setItem('@storage_Key', result.token)
                                props.navigation.replace('Main', {screen: 'home'});
                            }catch(err){
                                //console.log(err);   
                            }
                        }else{
                            Alert.alert(result.message)
                        }
                    })
                    .catch(err => console.log(err))
                }}>
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        touched,
                        errors,
                        handleBlur
                    }) =>(
                        <View style={styles.container}>
                            <View >
                                <TextInput
                                    style={styles.input}
                                    placeholder='Usrname'
                                    placeholderTextColor='#fff'
                                    // keyboardType="email-address"
                                    onChangeText={handleChange('username')}
                                    value={values.username}
                                    onBlur={handleBlur('username')}/>
                                <Text style={styles.error}>{touched.username && errors.username}</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Password'
                                    placeholderTextColor='#fff'
                                    secureTextEntry={true}
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    onBlur={handleBlur('password')}/>
                                    <Text style={styles.error}>{touched.password && errors.password}</Text>
                                <TouchableOpacity 
                                    style={styles.button}
                                    onPress={handleSubmit}
                                >
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                <View style={styles.registerContainer}>
                                    <Text style={styles.registerText}>Create an </Text>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('signup')}>
                                        <Text style={styles.registerButton}>account</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.registerContainer}>
                                    <Text style={styles.registerText}>Forgot </Text>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('forgot')}>
                                        <Text style={styles.forgot}>password</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                        </View>
                    )}
                </Formik>

        </KeyboardAvoidingView>
    )
}




const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    logo:{
        alignItems: 'center',
        marginBottom: 40
    },
    image:{
        width: 100,
        height: 100
    },
    input:{
        width: 300,
        backgroundColor: '#B6BFC4',
        borderRadius: 25,
        padding: 16,
        fontSize: 16,
        marginVertical: 10
    },
    button:{
        width: 300,
        backgroundColor: '#738289',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    registerContainer:{
        alignContent: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    registerText:{
        color: '#738289',
        fontSize: 16
    },
    registerButton:{
        color: '#738289',
        fontSize: 16,
        fontWeight: 'bold'
    },
    forgot:{
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    },
    error:{
        color: 'red'
    }

})
export default Login;