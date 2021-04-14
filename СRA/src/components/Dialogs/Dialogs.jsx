import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs} >
      <div className={classes.dialogsItem}>
        <div className={classes.dialog + ' ' + classes.active}>Dmitriy</div>
        <div className={classes.dialog}>Ivan</div>
        <div className={classes.dialog}>Jill</div>
        <div className={classes.dialog}>Rick</div>
        <div className={classes.dialog}>Oksana</div>
      </div>
    <div className={classes.messages}>
      <div className={classes.message}>Hi</div>
      <div className={classes.message}>How are You</div>
      <div className={classes.message}>Today</div>
    </div>
    </div>
  );
};

export default Dialogs;
