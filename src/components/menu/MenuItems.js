import React from "react";
import { NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';


export default function MenuItem({id, title, url, active}) {
    return(
        active!=undefined ? (
  <NavItem>
      <NavLink href={url} id={id} active >
         {
            title!=undefined ? <span> {title}</span> : <i>no title</i>        
         }
       </NavLink>
  </NavItem>     
        ) : (
            <NavItem>
                <NavLink href={url} id={id} >
                   {
                       title!=undefined ? <span>{title}</span> : <i>no title</i>   
                   }
                 </NavLink>
            </NavItem>     
                  )  
          )
}
  

MenuItem.defaultProps = {
    // active: true,
    bg : "rgb(226, 226, 226)"
};

MenuItem.propTypes = {
    active : PropTypes.bool
}
