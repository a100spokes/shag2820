import React, {Component} from "react";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button
} from 'reactstrap';


export default class TodoItem extends Component{
    constructor(props) {
        super(props);
    }



    render() {
        let {item,change, delItem} = this.props;

        return(
            <Card>
                <CardBody>
                    <CardTitle tag="h5">#{item.id} {item.title}</CardTitle>
                    <Row>
                        <Col lg={3}>
                            <Button onClick={()=>change(item.id)} tag={"span"} color={item.completed ? "success" : "danger"}>
                                {item.completed ? "done" : "undone"}
                            </Button>
                        </Col>
                        <Col lg={8}></Col>
                        <Col lg={1}>
                            <Button onClick={()=>delItem(item.id)} tag={"span"}  color="warning">delete                     
                                
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }

    // handleStatus(){
    //
    // }
}


