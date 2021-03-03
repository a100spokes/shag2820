import React, {Component} from "react"; 
import TodoItem from "@pages/todos/Item";
import Loader from "@comp/loader/Loader";
import {Row} from 'reactstrap'; 
import AddPostItemForm from "@elems/forms/AddPostItemForm";
import axios from "axios";
import {connect} from "react-redux";
import Filter from "@comp/filter/Filter";
import {hideNotification,showNotifFailTodos,showNotifAllOKTodos,showNotifRemove,showNotifRemoveNot,showNotifUpdate,} from "@redux/actions/notification";
// import data from "@comp/confirm/Confirm_update";


 

/* export default */ class TodosList extends Component{
     
    constructor(props) {
        console.log("constructor")
        super(props); 
        this.state = {
            todos: [],
            sort : "all",
           /*  cls:"notif" ,    */        
            loader: true,          
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.filter = this.filter.bind(this);
        this.sortTodos = this.sortTodos.bind(this);
        
    }
   
    render() {
        let {loader, } = this.state;
        
        let todos = this.sortTodos();

        return(
            <div>             
                {loader ? <Loader /> : <Row><Filter filterType={this.filter}/><AddPostItemForm /></Row>}   

                {todos.map((item)=> <TodoItem item={item}
                                     remove={this.removeItem}
                                     update={this.updateItem}
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
                    
                    this.props.showNotifAllOKTodos();                         
                        
                        setTimeout(()=>{
                            this.props.hideNotification(); 
                        },4000); 
                    console.log("setState")
                })
            })

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
       
     })
     this.props.showNotifUpdate(); 
     setTimeout(()=>{
        this.props.hideNotification(); 
    },2000); 
}


   removeItem(id) {

    axios.delete(`${process.env.API_URL_XHR}/${id}`/* ,data */,{
        headers: {
            'apptoken': process.env.API_KEY,
        },
    })
        .then(response=>{
            this.setState({
                todos : [...this.state.todos.filter(item=>item.id!=id ? true : false)],
               
            })
            this.props.showNotifRemove(); 
            
            setTimeout(()=>{
                this.props.hideNotification(); 
            },2000); 
        })            
        
        .catch(error=>{
            this.props.showNotifRemoveNot(); 
            console.log(error);
            
            setTimeout(()=>{
                this.props.hideNotification(); 
            },2000);            
        })   
}
updateItem(id) {
/*
* как получить дату из import ConfirmUpdate from "@comp/confirm/Confirm_update";
*/
    axios.put(`${process.env.API_URL_XHR}/${id}`,data/* ,data */,{
        headers: {
            'apptoken': process.env.API_KEY,
        },
    })
        .then(response=>{
            console.log(id)
            /* this.setState({
                todos : [...this.state.todos.map(item=>{
                    if(item.id==id) {
                        item.completed = !item.completed
                    }
                    return item
                })],
              
            }) */
            
           /*  this.setState({
                todos : [...this.state.todos.filter(item=>item.id!=id ? true : false)],
               
            })
            this.props.showNotifRemove(); 
            
            setTimeout(()=>{
                this.props.hideNotification(); 
            },2000);  */
        })            
        
        .catch(error=>{
            this.props.showNotifRemoveNot(); 
            console.log(error);
            
            setTimeout(()=>{
                this.props.hideNotification(); 
            },2000);            
        })   
}


filter (type) { 
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

const mapStateToProps = (store)=>{
   
    return {        
        notification : store.NotificationIndex,        
    }
}

const mapDispatchToProps = {    
    showNotifAllOKTodos,
    hideNotification,
    showNotifFailTodos,
    showNotifRemove,
    showNotifRemoveNot,
    showNotifUpdate,
}

export default connect(mapStateToProps,mapDispatchToProps)(TodosList)


