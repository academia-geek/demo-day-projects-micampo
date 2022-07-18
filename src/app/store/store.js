import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { userReducers } from '../reducers/user.reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: userReducers,
    user: userReducers,
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);