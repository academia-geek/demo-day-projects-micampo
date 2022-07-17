import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { addProReducer } from "../reducers/addReducer";

const composeEnhancers =
   (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
   productos: addProReducer
});

export const store = createStore(
   reducers,
   composeEnhancers(applyMiddleware(thunk))
);
