import React, {Component} from "react";
import {
    Card, Row, Col, CardBody,
    CardTitle
} from 'reactstrap';
import {Link} from "react-router-dom";


export default class PostItem extends Component{
    constructor(props) {
        super(props);
        // this.state= {
        //     modalUpdate : false,
        //     modalRemove : false
        // }
        // this.toggleModalUpdate=this.toggleModalUpdate.bind(this);
        // this.toggleModalRemove=this.toggleModalRemove.bind(this);
    }



    render() {
        let {item} = this.props;

        return(
            <Card>
                <CardBody>
                    <CardTitle tag="h5">#{item.id} {item.title}</CardTitle>
                    <Row>
                        <Col lg={12}>
                            <Link to={`/posts/${item.id}`}>more</Link>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}


