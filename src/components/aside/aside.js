import React from "react";
import "./style.scss";
import AsideItem from "./AsideItem";
import data from "./asideData.json"
import { ListGroup } from 'reactstrap';

export default function Aside() {
    return(
        <ListGroup>
            {
                data.map((element)=> <AsideItem key={element.id}
                                               id={element.id}
                                               title={element.title}
                                            //    description={element.desc}
                                            url={element.url}
                                            active={element.active}
                                               bg={element.bg}/>)
            }
         </ListGroup>
    )
}


/* import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import data from "./asideData.json"

const Example = (props) => {
  return (
    <div>     
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <p />     
    </div>
  );
}

export default Example; */
