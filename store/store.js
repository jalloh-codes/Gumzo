import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import authReducer from '../reducer/authReducer';

import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

const store = createStore(combineReducers({authReducer}), initialState, compose(
    applyMiddleware(...middleware)
));

export default store;