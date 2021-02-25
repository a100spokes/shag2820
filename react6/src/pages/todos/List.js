import React, {Component} from "react";
import TodoItem from "@pages/posts/Item";

import Header from "@elems/Header";
import AddPostItemForm from "@elems/forms/AddPostItemForm";
import axios from "axios";
import Filter from "@comp/filter/Filter";
import {connect} from "react-redux";
import {showLoader, hideLoader} from "@redux/actions/loader";
import {addAllTodo, removeTodo} from "@redux/actions/todos";

class TodosList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sort : "undone",
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.filter = this.filter.bind(this);
        this.sortTodos = this.sortTodos.bind(this);
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps")
    //     return null
    // }

    render() {
        let {loader} = this.state;
        console.log(this.props)
        let todos = this.sortTodos();



        return(
            <div>
                <Header />
                <AddPostItemForm />
                <Filter filterType={this.filter}/>

                {todos.map((item)=> <TodoItem item={item}
                                     remove={this.removeItem}
                                     change={this.changeStatus}
                                     key={item.id} />
                )}
            </div>
        )
    }

    componentDidMount() {
        this.props.showLoader();
        setTimeout(()=>{
            axios.get(`${process.env.API_URL_XHR}`,{
                method : "GET",
                headers: {
                    'apptoken': process.env.API_KEY,
                },
            })
                .then(response=>{
                    this.props.addAllTodo(response.data.data);
                    this.props.hideLoader();
                    //this.props.notification("Данные загружены");
                }).catch((error)=>{
                //this.props.notification(error);
            })
        },3000)

    }

    changeStatus(id) {

       // let {posts} = this.state;
       // let newTodos = [];
       // for(let i =0 ; i<posts.length ; i++) {
       //     if(posts[i].id==id) {
       //         posts[i].completed = !posts[i].completed;
       //     }
       //     newTodos.push(posts[i]);
       // }
       //
       //
       //  this.setState({
       //      posts : newTodos
       //  })

        this.setState({
             todos : [...this.state.todos.map(item=>{
                 if(item.id==id) {
                     item.completed = !item.completed
                 }
                 return item
             })]
         })
    }

    removeItem(id) {

        this.setState({
            todos : [...this.state.todos.filter(item=>item.id!=id ? true : false)]
        })
    }

    filter (type) {
        console.log(111,type)
        this.setState({
            sort: type
        })
    }

    sortTodos () {
        let {sort} = this.state;
        let todos = this.props.store;
        //posts = [].concat(posts);

        const arrSort = [...todos.filter((item)=>{

            if(sort=="all") {
                return true
            }
            else if(sort=="done" && item.completed==1) {
                return true
            }
            else if(sort=="undone" && item.completed==0) {
                return true
            }

            return false
        })];

        return arrSort;

    }

}

const mapStateToProps = (store)=>{
    return {
        store : store.Todos,
        loader : store.Loader,
    }
}

const mapDispatchToProps = {
    addAllTodo,
    removeTodo,
    showLoader,
    hideLoader
}


export default connect(mapStateToProps,mapDispatchToProps)(TodosList)


