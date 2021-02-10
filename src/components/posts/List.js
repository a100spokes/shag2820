import React, {Component} from "react";
import TodoItem from "@comp/posts/Item";
import Loader from "@comp/loader/Loader";
import axios from "axios";

export default class TodosList extends Component{
    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            todos: [],
            loader: true,
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.itemDelete = this.itemDelete.bind(this);
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps")
    //     return null
    // }

    render() {
        let {todos, loader} = this.state;
        return(
            <div>
                {loader ? <Loader /> : null}
                {todos.map((item)=> <TodoItem item={item}
                                              change={this.changeStatus}
                                              delItem={this.itemDelete}
                                              key={item.id} />)}

                {/*{*/}
                {/*    todos.length!=0 ? todos.map((item)=> <TodoItem item={item} key={item.id} />) : <Loader />*/}
                {/*}*/}
            </div>
        )
    }

    componentDidMount() {
        setTimeout(()=>{
            axios.get("https://jsonplaceholder.typicode.com/todos")
                .then(response=>{
                    console.log(response.data)
                    // bad this.state.todos = response.data;
                    this.setState({
                        todos : response.data,
                        loader: false, // loader: !this.state.loader
                    },()=>{
                        console.log("setState")
                    })
                })
        },1000)
    }

    changeStatus(id) {

       // let {todos} = this.state;
       // let newTodos = [];
       // for(let i =0 ; i<todos.length ; i++) {
       //     if(todos[i].id==id) {
       //         todos[i].completed = !todos[i].completed;
       //     }
       //     newTodos.push(todos[i]);
       // }
       //
       //
       //  this.setState({
       //      todos : newTodos
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
    itemDelete(id) {
        this.setState({
             todos : [...this.state.todos.filter(item=>item.id!=id)]
         })
         console.log("del");
        /* let {todos} = this.state;
        let newTodos = [];
        for(let i =0 ; i<todos.length ; i++) {
            if(todos[i].id==id) {
                // todos[i].completed = !todos[i].completed;
                todos.splice([i], 1);
            }
            newTodos.push(todos[i]);
        }
         this.setState({
             todos : newTodos
         }) */
     }

}


