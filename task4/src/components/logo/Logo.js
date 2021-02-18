import React from "react";
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
}