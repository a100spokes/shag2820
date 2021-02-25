import {LOADER_SHOW, LOADER_HIDE} from  "@redux/types";
export default function Loader(store=false, action) {
    switch (action.type) {
        case LOADER_SHOW : {
            return true;
        }

        case LOADER_HIDE : {
            return false
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