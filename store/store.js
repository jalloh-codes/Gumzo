import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import authReducer from '../reducer/authReducer';
import userReducer from '../reducer/userReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    contacts: userReducer
});

const middleware = applyMiddleware(thunk);

export default createStore(rootReducer, middleware);