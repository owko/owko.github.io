import { applyMiddleware, compose, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import handleUser from "./UserStatus/reducer"
const reducers = combineReducers({ handleUser })
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store;

