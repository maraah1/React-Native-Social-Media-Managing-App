import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import users from './reducers/users'

let rootReducer = combineReducers({
 users
})

let middleware = [thunk, logger]

export default () => createStore(rootReducer, applyMiddleware(...middleware))
