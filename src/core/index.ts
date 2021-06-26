
import { combineReducers } from 'redux'
import loginReducer from './login/login-store'

const rootReducer = combineReducers({
    login: loginReducer,
})

export default rootReducer