import {ADD_TODO_LIST, ADD_TODO, REMOVE_TODO, UPDATE_TODO} from  "@redux/types";
export default function Todos(store=[], action) {

    switch (action.type) {
        case ADD_TODO_LIST : {
            return [...action.data];
        }

        case ADD_TODO : {
            return [...store, action.data];
        }

        case REMOVE_TODO : {
            return [...store, action.data];
        }

        default : {
            return [];
        }
    }
    /*
    * action
    *   todos : [...this.state.todos.filter(item=>item.id!=id ? true : false)];
    * {
        type : ADD_TODO_LIST,
        data : list
    }
    * */
}