import React, {Component} from "react";
import TodoItem from "@pages/posts/Item";
import Loader from "@comp/loader/Loader";
import Header from "@elems/Header";
import AddPostItemForm from "@elems/forms/AddPostItemForm";
import axios from "axios";
import Filter from "@comp/filter/Filter";


export default class TodosList extends Component{
    constructor(props) {
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
                <AddPostItemForm />
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
            axios.get(`${process.env.API_URL_XHR}`,{
                method : "GET",
                headers: {
                    'apptoken': process.env.API_KEY,
                },
            })
                .then(response=>{
                    this.setState({
                        todos : response.data.data,
                        loader: false, // loader: !this.state.loader
                    },()=>{
                        console.log("setState")
                    })


                })
        },1000)

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
        let {todos, sort} = this.state;
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


