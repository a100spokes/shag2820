import React from "react";
import  "@comp/logo/style.scss";


export default function Logo({text,bgColor}) {

    return(
       /*  <div className={"logo"} style={
            {background:bgColor}
        } >
           {text}
        </div> */
        <a href="#desc">
        <img className={"logo"} src="https://s3.tproger.ru/uploads/2016/10/reactmini.png"/>
        </a>
        // <img src="../static/images/logo.png"/>
    )
}

/* function getTime() {
    let date = new Date();
    return date.toLocaleString();
} */












/* import React from "react";
import logo from "@images/logo_tut.png";
import "./style.scss";

export default function Logo({text,bgColor}) {

    return(
        <div className={"logo"} style={
            {background:bgColor}
        } >
           {text}
        </div>
    )
}

function getTime() {
    let date = new Date();
    return date.toLocaleString();
} */