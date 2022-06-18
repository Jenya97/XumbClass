import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { reducer, fetchUsers } from "./Fetch/fetch";
import thunk from "redux-thunk";


export const store=createStore(reducer,applyMiddleware(thunk))

store.dispatch(fetchUsers())