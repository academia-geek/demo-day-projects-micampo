import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { loginReducers } from '../reducers/login.reducers';
import { loginCheckReducers } from '../reducers/loginCheck.reducer.reducer';
import { userReducers } from '../reducers/user.reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    user: userReducers,
    loginCheck: loginCheckReducers,
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);