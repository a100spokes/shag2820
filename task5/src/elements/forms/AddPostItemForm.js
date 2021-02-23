/* import React, { useState } from 'react';

const AddPostItemForm = (props) => {


    return (
        <form>
           <input type={"text"} />
            <button>add</button>
        </form>
    );
}

export default AddPostItemForm; */

// ^^^^original form^^^^
import Notif from "@comp/notification/Notification";
import axios from "axios";
import React, { useState } from 'react';
import { Collapse, Button,} from 'reactstrap';





const AddPostItemForm = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [notificationStat, setNotif] = useState(false);   
    const [notificationClass, setNotifClass] = useState("good");   
    const [notificationMessage, setNotifText] = useState("done");   
    const toggle = () => setIsOpen(!isOpen);    
    
/*
* "title": "test",
            "description": "admin@comet24.pro",
            "completed": 0,
            "order": 0,
            "dead_line": "2021-01-16 21:51:57",
* */
    return (
<div>
      {notificationStat ? <Notif status={notificationClass}>{notificationMessage}</Notif> :null} 
      <Button outline color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>Add todos here</Button>
      <Collapse isOpen={!isOpen}>
/////////////////////////////////////////////////////
        <form onSubmit={submit}>            
            <div><input type={"text"} name={"title"} placeholder={"title"} /></div>
            <div><textarea name={"description"} placeholder={"description"}></textarea></div>
            {/* <div>
                Done <input type={"radio"} value={1} name={"completed"}/>
            </div> */}
            {/*<div>*/}
            {/*    Undone <input type={"radio"} value={0} name={"completed"}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    Dealine <input type={"date"} name={"dead_line"}/>*/}
            {/*</div>*/}
            <div>
                <button>Отправить</button>
            </div>
        </form>
        </Collapse>
    </div>
/////////////////////////////////////////////
    );


    function submit(e) { 
        e.preventDefault();
        let data =  new FormData(e.target);
            data.set('order',0);
            data.set('completed',0);
        axios.post(`${process.env.API_URL_XHR}`,data,{
            headers: {
                'apptoken': process.env.API_KEY,
            },
        })
            .then(response=>{
                console.log(response)
                setNotif(true);  
                setTimeout(()=>{
                    setNotif(false);  
                },4000)
            })            
            
            .catch(error=>{
                console.log(error);
                setNotifText('Something wrong! Todos wasn`t added!');
                setNotif(true); 
                setNotifClass('bad');
                setTimeout(()=>{
                    setNotif(false);  
                },4000);
            })
    }
}

export default AddPostItemForm;