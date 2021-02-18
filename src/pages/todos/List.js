import React, {Component} from "react";
import TodoItem from "@pages/todos/Item";
import Loader from "@comp/loader/Loader";
import Header from "@elems/Header";
import axios from "axios";
import Filter from "@comp/filter/Filter";


export default class TodosList extends Component{
    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            todos: [],
            sort : "done",
            //filter:[]
            //filterType:"all","done","undone"
            loader: true,
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
        let todos = this.sortTodos();

        return(
            <div>
                <Header />

                {loader ? <Loader /> : <Filter filterType={this.filter}/>}

                {todos.map((item)=> <TodoItem item={item}
                                     remove={this.removeItem}
                                     change={this.changeStatus}
                                     key={item.id} />
                )}
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

    removeItem(id) {

        this.setState({
            todos : [...this.state.todos.filter(item=>item.id!=id ? true : false)]
        })
    }

    filter (type) {
        this.setState({
            sort: type
        })
    }

    sortTodos () {
        let {todos, sort} = this.state;
        //todos = [].concat(todos);

        const arrSort = [...todos.filter((item)=>{
            if(sort=="all") {
                return true
            }
            else if(sort=="done" && item.completed) {
                return true
            }
            else if(sort=="undone" && !item.completed) {
                return true
            }

            return false
        })];

        return arrSort;

    }

}


