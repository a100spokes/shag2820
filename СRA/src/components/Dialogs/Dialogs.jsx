import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.messageText}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Dmitriy" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Jill" },
    { id: 4, name: "Rick" },
    { id: 5, name: "Oksana" },
    { id: 6, name: "Dan" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are You" },
    { id: 3, message: "Today" },
    { id: 4, message: "Today" },
    { id: 5, message: "Today" },
  ];

  let dialogsElement = dialogs.map( dial=><DialogItem name={dial.name} id={dial.id} /> );
  let messagesElements = messages.map(mess =><Message messageText={mess.message} />);
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        {dialogsElement}
      </div>

      <div className={classes.messages}>
       {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
