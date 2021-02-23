import React, {Component} from "react";
import Confirm from "@comp/confirm/Confirm";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button,ButtonGroup
} from 'reactstrap';
import Footer from "@elems/Footer";
import {Link} from "react-router-dom";


export default class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.state= {
            modalUpdate : false,
            modalRemove : false
        }
        this.toggleModalUpdate=this.toggleModalUpdate.bind(this);
        this.toggleModalRemove=this.toggleModalRemove.bind(this);
    }



    render() {
        let {item,change, remove} = this.props;

        return(
            <Card>
                <CardBody>
                    <CardTitle tag="h5">#{item.id} {item.title}</CardTitle>
                    <Row>
                        <Col lg={2}>
                            <ButtonGroup>
                                <Button onClick={this.toggleModalUpdate} tag={"span"} color={item.completed ? "success" : "secondary"}>
                                    {item.completed ? "done" : "undone"}
                                </Button>
                                <Button onClick={this.toggleModalRemove} tag={"span"} color="danger">
                                    remove
                                </Button>
                            </ButtonGroup>
                            {/* <Link to={`/todos/${item.id}/${Date.now()+2}`}>more</Link> */}
                            {/* <Button>
                            <Link to={`/todos/${item.id}/${Date.now()+2}`}>more</Link>
                            </Button> */}
                        </Col>
                        <Col lg={10}>
                            <Button outline color="primary" size="sm">
                                <Link to={`/todos/${item.id}/${Date.now()+2}`}>read more</Link>
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
                <Confirm
                    active={this.state.modalUpdate}
                    message={`Обновить статус записи с id ${item.id}`}
                    ok={{
                        title:"Обновить",
                        color: "success",
                        fn : ()=>{
                            this.toggleModalUpdate();
                            change(item.id);
                        }
                    }}
                    cancel={this.toggleModalUpdate}
                ><Row>
                    <Col lg={12}>это будет пост с id {item.id}</Col>
                    <Col lg={12}>text</Col>
                </Row></Confirm>

                <Confirm
                    active={this.state.modalRemove}
                    message={`Удалить запись с id ${item.id}`}
                    ok={{
                        title:"Удалить",
                        color: "success",
                        fn : ()=>{
                            this.toggleModalRemove();
                            remove(item.id)
                        }
                    }}
                    cancel={this.toggleModalRemove}
                >

                    <Footer />
                </Confirm>
            </Card>
        )
    }

    toggleModalUpdate(){
        this.setState({
            modalUpdate : !this.state.modalUpdate
        })
    }

    toggleModalRemove(){
        this.setState({
            modalRemove : !this.state.modalRemove
        })
    }
}


