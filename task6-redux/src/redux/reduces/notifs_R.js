import {NOTIFICATION_SHOW, NOTIFICATION_HIDE} from "@redux/types";

export default function Notification(store=false, action) {
    switch (action.type) {
        case NOTIFICATION_SHOW : {
            return true;
        }

        case NOTIFICATION_HIDE : {
            return false;
        }

        default : {
            return false;
        }
    }
    /*
    * action
    *
    * {
        type : ADD_TODO_LIST,
        data : list
    }
    * */
}