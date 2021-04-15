import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs} >
      <div className={classes.dialogsItem}>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to="/dialogs/1">Dmitriy</NavLink>
          </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/2">Ivan</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/3">Jill</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/4">Rick</NavLink>
          </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/5">Oksana</NavLink>
          </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/6">Dan</NavLink>
          </div>
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
