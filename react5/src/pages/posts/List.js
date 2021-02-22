import React, {Component} from "react";
import PostItem from "@pages/posts/Item";
import Loader from "@comp/loader/Loader";
import axios from "axios";


export default class PostsList extends Component{
    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            posts: [],
            sort : "done",
            //filter:[]
            //filterType:"all","done","undone"
            loader: true,
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.filter = this.filter.bind(this);
        this.sortTodos = this.sortTodos.bind(this);
        this.setListCount = this.setListCount.bind(this);
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps")
    //     return null
    // }

    render() {
        let {loader,posts} = this.state;
       // let todos = this.sortTodos();

        return(
            <div>
                {loader ? <Loader /> : <select onChange={this.setListCount}>
                    <option value={10}>10</option>
                    <option value={30}>30</option>
                    <option value={50}>30</option>
                    <option value={100}>100</option>
                </select>}

                {posts.map((item)=> <PostItem item={item}
                                     key={item.id} />
                )}
            </div>
        )
    }

    componentDidMount() {
        setTimeout(()=>{
            axios.get(`${process.env.API_URL}/posts?_limit=10`)
                .then(response=>{


                    this.setState({
                        posts : response.data,
                        loader: false, // loader: !this.state.loader
                    },()=>{
                        console.log("setState")
                    })


                })
        },1000)

    }

    setListCount(e) {

        axios.get(`${process.env.API_URL}/posts?_limit=${e.target.value}`)
            .then(response=>{


                this.setState({
                    posts : response.data,
                },()=>{
                    console.log("setState")
                })


            })

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


