import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducer/userReducer';

const initialState = {};
const middleleware = [thunk]



const store = createStore(combineReducers({userReducer}),  initialState,compose(
    applyMiddleware(...middleleware),
    )
);

export default store;