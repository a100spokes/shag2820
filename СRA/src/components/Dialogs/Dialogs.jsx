import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props)=>{
  let path = "/dialogs/" + props.id;

  return   <div className={classes.dialog + ' ' + classes.active}>
  <NavLink to={path}>{props.name}</NavLink>
  </div>
}

const Message = (props) => {
  return <div className={classes.message}>{props.messageText}</div>
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs} >
      <div className={classes.dialogsItem}>
        <DialogItem name="Dmitriy" id="1" />
        <DialogItem name="Ivan" id="2" />
        <DialogItem name="Jill" id="3" />
        <DialogItem name="Rick" id="4" />
        <DialogItem name="Oksana" id="5" />
        <DialogItem name="Dan" id="6" />       
      </div>

    <div className={classes.messages}>
     <Message messageText="Hi"/>
     <Message messageText="How are You"/>
     <Message messageText="Today"/>      
    </div>
    </div>
  );
};

export default Dialogs;
