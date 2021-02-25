import {combineReducers} from "redux";
import Loader from "./loader";
import Todos from "./todos";

export default  combineReducers({
    Loader,
    Todos
})