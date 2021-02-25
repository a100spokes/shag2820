import {LOADER_SHOW, LOADER_HIDE} from "@redux/types";


export function showLoader() {
    return {
        type : LOADER_SHOW,
        data : true
    }
}

export function hideLoader() {
    return {
        type : LOADER_HIDE,
        data : false
    }
}



