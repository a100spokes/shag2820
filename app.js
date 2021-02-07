import "@static/scss/app.scss";
import React from "react";
import {render} from "react-dom";
import Core from "@comp/Core";


render(<Core />,document.getElementById("app"),()=>{
    console.log("render")
})