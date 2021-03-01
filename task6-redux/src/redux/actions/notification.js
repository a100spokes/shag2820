import {NOTIFICATION_SHOW_ALL_LOAD_POSTS,NOTIFICATION_SHOW_FAIL_LOAD_POSTS,NOTIFICATION_SHOW_FAIL_LOAD_TODOS,NOTIFICATION_SHOW_ALL_LOAD_TODOS, NOTIFICATION_HIDE} from "@redux/types";


export function showNotifAllOKPosts() {
    console.log("showNotification Action");
    return {
        type : NOTIFICATION_SHOW_ALL_LOAD_POSTS,
        data : true ,
        // text: "wwwwww"
    }
}
export function showNotifAllOKTodos() {
    console.log("showNotification Action");
    return {
        type : NOTIFICATION_SHOW_ALL_LOAD_TODOS,
        data : true ,
            }
}
export function showNotifFailPosts() {
    
    return {
        type : NOTIFICATION_SHOW_FAIL_LOAD_POSTS,
        data : true ,
        // text: "wwwwww"
    }
}
export function showNotifFailTodos() {
    
    return {
        type : NOTIFICATION_SHOW_FAIL_LOAD_TODOS,
        data : true ,
        // text: "wwwwww"
    }
}

export function hideNotification() {
    console.log("hideNotification Action");
    return {
        type : NOTIFICATION_HIDE,
        data : false
    }
}



