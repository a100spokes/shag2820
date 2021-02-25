import {combineReducers} from "redux";
import Loader from "./loader";
import Todos from "./todos";
import Notification from "./notifs_R";

export default  combineReducers({
    Loader,
    Todos,
    Notification
})