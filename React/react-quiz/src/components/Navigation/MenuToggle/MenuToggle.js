import React from 'react'
import classes from './MenuToggle.module.css'
import { BsFillArrowRightSquareFill, BsBackspaceFill } from "react-icons/bs";

const MenuToggle = props =>{
    const cls = [
        classes.MenuToggle,               
    ]

    let icon = <BsBackspaceFill />

    if( props.isOpen){
         cls.push(classes.open)
         icon = <BsBackspaceFill /> 
    } else {
         icon = <BsFillArrowRightSquareFill />
    }

    return (
       <i
       className={cls.join(' ')}
       onClick={props.onToggle}
       >{icon}</i>        
    )
}

export default MenuToggle