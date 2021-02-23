import React, {Component} from "react"; 
import TodoItem from "@pages/todos/Item";
import Loader from "@comp/loader/Loader";
// import Header from "@elems/Header";
import {Row} from 'reactstrap'; 
import AddPostItemForm from "@elems/forms/AddPostItemForm";
import axios from "axios";
// import Add from "@comp/add/Add";
import Filter from "@comp/filter/Filter";
import Notif from "@comp/notification/Notification";
// const [modal, setModal] = useState(false)

export default class TodosList extends Component{
    constructor(props) {
        console.log("constructor")
        super(props); 
        this.state = {
            todos: [],
            sort : "all",
            cls:"notif" ,           
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
        // let {loader} = this.state;
        let todos = this.sortTodos();

        return(
            <div>
              {/* <AddPostItemForm /> */}
                {loader ? <Loader /> : <Row><Filter filterType={this.filter}/><AddPostItemForm />{/* <Add/> */}</Row>}                
                {/* {loader ? <Filter /> : <Add/>} */}
                {/* {loader ? null : <Add/>} */}                                       
                {notificationStat ? <Notif status='good'>{notificationMessage}</Notif> :null}                

                {todos.map((item)=> <TodoItem item={item}
                                     remove={this.removeItem}
                                     change={this.changeStatus}
                                     key={item.id} /> 
                )}
            </div>
        )
    }
    /*
    *! ^^^origin S^^^
    */
/* 
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

    } */
    /*
    *! ^^^origin E^^^
    */

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
   //  this.setState({
   //      posts : newTodos
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
    })
    setTimeout(()=>{
        this.setState({                
        notificationStat: false
    })
    },4000)    
}

filter (type) {
    // console.log(111,type)
    this.setState({
        sort: type
    })
}

sortTodos () {
    let {todos, sort} = this.state;     

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


