import {NOTIFICATION_SHOW, NOTIFICATION_HIDE} from "@redux/types";


export function showNotif() {
    return {
        type : NOTIFICATION_SHOW,
        data : true
    }
}

export function hideNotif() {
    return {
        type : NOTIFICATION_HIDE,
        data : false
    }
}



