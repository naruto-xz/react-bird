import {applyMiddleware, createStore} from "redux"
import reducer from "./reducer";

// 纯redux
// let store = createStore(reducer);
// window.store = store;

//借助react-redux
let store = createStore(reducer, applyMiddleware());
export default store;