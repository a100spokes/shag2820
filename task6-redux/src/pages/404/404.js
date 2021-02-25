import React, {Component} from "react";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button,ButtonGroup
} from 'reactstrap';
import {Link} from "react-router-dom";

export default class ErrorPage extends Component{
    constructor(props) {
        super(props);
    }



    render() {
        let {item,change, remove} = this.props;

        return(
            <Col lg={12} className={"some-class"}>
                <h1>page not found</h1>            
            <Link to={"/"}>назад</Link>
        </Col>
        )
    }
}


