import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col,} from 'reactstrap';

const Filter = (props) => {
    const {filterType} = props;
    return (
        <div>
            
            <Col lg={11}>
            <ButtonGroup className="filter">
                <Button color={"primary"} onClick={()=>filterType("all")}>All</Button> 
                <Button color={"success"} onClick={()=>filterType("done")}>Done</Button>
                <Button color={"danger"}  onClick={()=>filterType("undone")}>Undone</Button>
            </ButtonGroup>
            </Col>
            
        </div>
    );
}

export default Filter;