import React, { useState } from 'react';
import { Button, ButtonGroup} from 'reactstrap';

const Filter = (props) => {
    const {filterType} = props;
    return (
        <div>
            <ButtonGroup>
                <Button color={"primary"} onClick={()=>filterType("all")}>All</Button>
                <Button color={"success"} onClick={()=>filterType("done")}>Done</Button>
                <Button color={"danger"}  onClick={()=>filterType("undone")}>Undone</Button>
            </ButtonGroup>
        </div>
    );
}

export default Filter;