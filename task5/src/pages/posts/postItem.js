import React, {Component} from "react";
import Confirm from "@comp/confirm/Confirm";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button,ButtonGroup
} from 'reactstrap';
import Footer from "@elems/Footer";
import {Link} from "react-router-dom";


export default class PostItem extends Component{
    constructor(props) {
        super(props);
        /* this.state= {
            modalUpdate : false,
            modalRemove : false
        }
        this.toggleModalUpdate=this.toggleModalUpdate.bind(this);
        this.toggleModalRemove=this.toggleModalRemove.bind(this); */
    }



    render() {
        let {item} = this.props;

        return(
            <Card>
                <CardBody>
                    <CardTitle tag="h5">user #{item.userId}, post #{item.id}: {item.title}</CardTitle>
                    <Row>                    
                       <Col lg={10}>
                            <Button outline color="primary" size="sm">
                                 <Link to={`/posts/${item.userId}/${item.id}/${Date.now()+2}`}>read more</Link>
                            </Button>
                        </Col>
                    </Row>
                </CardBody>            
            </Card>
        )
    }
} 


