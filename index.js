/**
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './store/store';


//const configureStore = store({})
const Gumzo = () =>
    <Provider store={store}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => Gumzo);
