import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';


export default function AsideItem({id, title, url, active}) {
    return(
        active!=undefined ? (
    <ListGroupItem  active tag="a" href={url} action>
      
         {
            title!=undefined ? <span> {title}</span> : <i>no title</i>        
         }
      
    </ListGroupItem>
        ) : (
            <ListGroupItem tag="a" href={url} action>
      
         {
            title!=undefined ? <span> {title}</span> : <i>no title</i>        
         }
      
    </ListGroupItem>
                  )  
          )
}
  

AsideItem.defaultProps = {
    // active: true,
    bg : "rgb(226, 226, 226)"
};

AsideItem.propTypes = {
    active : PropTypes.bool
}
