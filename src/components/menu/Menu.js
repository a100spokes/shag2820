import React from "react";
import "./style.scss";
import { Nav } from 'reactstrap';
import MenuItem from "./MenuItems"
import data from "./menu.json"

export default function Menu() {

    return(

        <Nav className={"menu"}>
            {
            data.map((element)=> <MenuItem key={element.id}
                                           id={element.id}
                                           title={element.title}
                                        //    description={element.desc}
                                           active={element.active}
                                           url={element.url}
                                          /*  bg={element.bg} *//>)
        }
</Nav>  
    )
}

function getTime() {
    let date = new Date();
    return date.toLocaleString();
}