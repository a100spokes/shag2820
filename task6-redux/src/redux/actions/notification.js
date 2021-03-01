import {NOTIFICATION_SHOW, NOTIFICATION_HIDE} from "@redux/types";


export function showNotification() {
    console.log("showNotification Action");
    return {
        type : NOTIFICATION_SHOW,
        data : true
    }
}

export function hideNotification() {
    console.log("hideNotification Action");
    return {
        type : NOTIFICATION_HIDE,
        data : false
    }
}



