import React, {Component, Fragment} from "react"; 
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
        let {tabData, data1, submit} = this.props; 

        let {loader, } = this.state;
        
        let todos = this.sortTodos();

        return(
            <Fragment>            
                {loader ? <Loader /> : <Row><Filter filterType={this.filter}/><AddPostItemForm /></Row>}   

                {todos.map((item)=> <TodoItem item={item}
                                     remove={this.removeItem}
                                     update={this.updateItem}
                                    //  update={this.componentDidMount}
                                     change={this.changeStatus}
                                     key={item.id} /> 
                )}            
            </Fragment>
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
/////////////////////////////////////////////////////////////////////////////
changeStatus(id) { 

    let title;
    let description;
    let dead_line;
    let comp;

    

    axios.get(`${process.env.API_URL_XHR}/${id}`,{
        method: 'GET',
        headers: {
          'apptoken': process.env.API_KEY,
        }
      }
    )
    .then(response=>{
        // console.error(response.data);  
        // console.error("response.data.data");
       
            comp=response.data.completed;
            comp==1?comp=0:comp=1;
            console.error("HERE IS COMP",comp);
            title=response.data.title;  
            console.error(title);
            description=response.data.description;  
            console.error(description);
            dead_line=response.data.dead_line;  
            /* this.setState({
                todos : [...this.state.todos.map(item=>{
                    if(item.id==id) {
                        item.completed = !item.completed
                        console.error('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
                    }
                    return item
                })],
                
            }) */

            axios.put(`${process.env.API_URL_XHR}/${id}`, {
                "completed": `${comp}`, 
                 
                "title": `${title}`,
                // "title": "title",
                // "description": "assa",
                "description": `${description}`,
                // "dead_line": "2021-03-17 00:00:00",         
                "dead_line": `${dead_line}`,         
        },{
          headers: {
                          'apptoken': process.env.API_KEY,
          }
        })
            .then(response=>{
                // console.log(response)    
                // console.log("title", title);
                // console.log(data)    
        
               /*  this.setState({
                    todos : [...this.state.todos.map(item=>{
                        if(item.id==id) {
                            item.completed = !item.completed
                            console.error('ZZZZZZZZZZZZ');
                        }
                        return item
                    })],
                    
                }) */
                // updateItem() ;
                this.props.showNotifUpdate(); 
                setTimeout(()=>{
                    this.props.hideNotification(); 
                },2000); 
        
                axios.get(`${process.env.API_URL_XHR}`,{
                    method : "GET",
                    headers: {
                        'apptoken': process.env.API_KEY,
                    },
                })
        
                    .then(response=>{
                        this.setState({
                            /* todos : [...this.state.todos.map(item=>{
                                if(item.id==id) {
                                    item.completed = item.completed
                                }
                                return item
                            })], */
                            todos : response.data.data,
                        })
                        // console.log(response.data.data);                
                    })
        
                    .catch(error=>{
                        console.log(error);                
                    })
                
            })            
            
            .catch(error=>{
                console.log(error);
        
              /*   this.props.showNotifRemoveNot(); 
                console.log(error);
                
                setTimeout(()=>{
                    this.props.hideNotification(); 
                },2000);      */       
            })   
    })
     
    .catch(error => console.error(error))
 
    // data.set('completed',0);
   /*  let data = {
        "completed" : 0,
      } */
    // axios.put(`${process.env.API_URL_XHR}/${id}`/* ,data */,{
   /*  axios.put(`${process.env.API_URL_XHR}/74`/* ,data ,{
        // completed : 1,
        headers: {
            // title : "newItem",
            'apptoken': process.env.API_KEY,
        },
    },{"completed" : 0,},) */


    
    
    
    
   /*  this.setState({
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
    },2000);  */
}
/////////////////////////////////////////////////////////////////////////////
/* changeStatus(id) { 
    
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
} */


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

updateItem() {

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


