import React from "react";
import {
    Card,  CardText, CardTitle ,CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function PostItem({id, title, description, bg, active}) {

    return(
       <Card style={bg!=undefined ? {background:bg} :null}>
           {active==true ?
               <CardBody>
                    {
                        title!=undefined ? <CardTitle >
                            {/* {id} */}<h3> {title}</h3>
                        </CardTitle > : <CardTitle >
                           no title
                        </CardTitle >
                    }
                    <CardText>{description}</CardText>
                </CardBody> : null }
       </Card>
    )
}

PostItem.defaultProps = {
    active: true,
    bg : "rgb(226, 226, 226)"
};

PostItem.propTypes = {
    active : PropTypes.bool
}
