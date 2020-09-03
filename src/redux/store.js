import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import betReducer from "./reducers/betReducer"


const store = createStore(betReducer, composeWithDevTools(applyMiddleware(thunk)))



export default store