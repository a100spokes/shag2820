import React, {Component} from "react";
import TodoItem from "@comp/posts/Item";
import Loader from "@comp/loader/Loader";
import Filter from "@comp/filter/Filter";
import Notif from "@comp/notification/Notification";
import Header from "@elems/Header";
import axios from "axios";



export default class TodosList extends Component{
    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            todos: [],
            sort : "done",
            cls:"notif" ,
            //filter:[]
            //filterType:"all","done","undone"
            loader: true,
            notificationStat : false,
            notificationMessage: "",            
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
        let {/* todos ,*/ loader, notificationStat, notificationMessage, cls} = this.state;
        let todos = this.sortTodos();
        return(
            <div>
                <Header />
                {/* <Filter/>             */}
                {loader ? <Loader /> : <Filter filterType={this.filter}/>}                
                {notificationStat ? <Notif>{notificationMessage}</Notif> :null}
                

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
            axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
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
             })],
             notificationStat: true,   
             notificationMessage: `Запись # ${id} успешно изменена!` 
         })
         setTimeout(()=>{
            this.setState({                
            notificationStat: false
        })
        },2000)
    }

    removeItem(id) {

        this.setState({
            todos : [...this.state.todos.filter(item=>item.id!=id ? true : false)],         
            notificationStat: true,   
            notificationMessage: `Запись # ${id} успешно удалена! `,
            cls : 222222222
        })
        setTimeout(()=>{
            this.setState({                
            notificationStat: false
        })
        },4000)        
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


