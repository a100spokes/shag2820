import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

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

  let dialogsElement = dialogs.map((dial) => (
    <DialogItem name={dial.name} id={dial.id} />
  ));
  let messagesElements = messages.map((mess) => (
    <Message messageText={mess.message} />
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElement}</div>

      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
