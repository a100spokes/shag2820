import {combineReducers} from "redux";
import Notification from "./notification";
import Todos from "./todos";

export default  combineReducers({
    Notification,
    Todos
})