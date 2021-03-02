import React, {Component} from "react"; 
import TodoItem from "@pages/todos/Item";
import Loader from "@comp/loader/Loader";
import {Row} from 'reactstrap'; 
import AddPostItemForm from "@elems/forms/AddPostItemForm";
import axios from "axios";
import {connect} from "react-redux";
import Filter from "@comp/filter/Filter";
import {hideNotification,showNotifFailTodos,showNotifAllOKTodos,} from "@redux/actions/notification";
import {addAllTodo, removeTodo} from "@redux/actions/todos";


 

class TodosList extends Component{     
    constructor(props) {
        console.log("constructor")
        super(props); 
        this.state = {
            // todos: [],
            sort : "all",
            // cls:"notif" ,           
            loader: true,          
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.filter = this.filter.bind(this);
        this.sortTodos = this.sortTodos.bind(this);
        
    }
   
    render() {
        let {loader} = this.state;
        
        // let todos = this.sortTodos();
        let todos = this.props.store;
        return(
            <div>             
                {loader ? <Loader /> : <Row><Filter filterType={this.filter}/><AddPostItemForm /></Row>}   

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
                    loader: false,
                }) ;
                this.props.addAllTodo(response.data.data);
                console.error(response.data.data);
            })
            /* .then(response=>{
                this.props.showNotifAllOKTodos();  
           this.props.showNotifAllOKTodos()  ;
           setTimeout(()=>{
               this.props.hideNotification(); 
           },4000);  
                 }) */
           
            .catch(error=>{
                console.log(error);
                this.props.showNotifFailTodos();                         
                        
                        setTimeout(()=>{
                            this.props.hideNotification(); 
                        },4000);  
            })
    },1000)
}

changeStatus(id) { 

    this.setState({
         todos : [...this.state.todos.map(item=>{
             if(item.id==id) {
                 item.completed = !item.completed
             }
             return item
         })],
         notificationStat: true,   
         notificationMessage: `Todo # ${id} was successfully modified!` 
     })
     setTimeout(()=>{
        this.setState({                
        notificationStat: false
    })
    },2000)
}


   removeItem(id) {
       console.error(id);
       axios.delete(`${process.env.API_URL_XHR}/${id}`/* ,data */,{
           headers: {
               'apptoken': process.env.API_KEY,
            },
        })
        .then(response=>{            
            axios.get(`${process.env.API_URL_XHR}`,{
                method : "GET",
                headers: {
                    'apptoken': process.env.API_KEY,
                },
            })
                .then(response=>{                   
                    this.props.addAllTodo(response.data.data);  
                    setTimeout(()=>{
                        this.props.hideNotification(); 
                        // this.props.showNotifFailTodos();                     
                        console.log("hoppy");
                    },4000)
                })

           
            /*  this.setState({
                todos : [...this.state.todos.filter(item=>item.id!=id ? true : false)];
                notificationStat: true,   
                notificationMessage: `Todo # ${id} was successfully deleted! `,  
            }) */
           /*  setTimeout(()=>{
                this.setState({                
                notificationStat: false
            })
            },4000)    */
        })            
        
        .catch(error=>{
            console.log(error);
            this.setState({               
                notificationClass:"bad",
                notificationMessage: `Something went wrong! Todos # ${id} wasn\`t deleted. `,  
                notificationStat: true,   
            })
            setTimeout(()=>{
                this.setState({                
                    notificationStat: false,
                    notificationClass:"good",
                    notificationMessage: `Todo # ${id} was successfully deleted! `,    
                })                
            },4000);            
        })   
}



filter (type) { 
    this.setState({
        sort: type
    })
}

sortTodos () {
    let {sort} = this.state;     
    // let todos = this.props.store;
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
        notification : store.NotificationIndex,  
        store : store.Todos,      
    }
}

const mapDispatchToProps = {    
    showNotifAllOKTodos,
    hideNotification,
    showNotifFailTodos,
    addAllTodo,
    removeTodo,
}

export default connect(mapStateToProps,mapDispatchToProps)(TodosList)


