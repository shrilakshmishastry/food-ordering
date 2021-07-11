import { createStore,combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Cart from './reducers/cart';
import Products from './reducers/products';
import Store from './reducers/stores';
import thunk from "redux-thunk";
import User from "./reducers/user";

const reducers = combineReducers({
    cart : Cart,
    products : Products,
    store : Store,
    user: User,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;