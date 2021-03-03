import React, {Component} from "react";
import Confirm from "@comp/confirm/Confirm";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button,ButtonGroup, 
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
                    <Row className="dead">
                    {!item.completed ? <div className="container-red"><div className="gg-alarm"></div><span ><i>Dead line :</i> {item.dead_line}</span></div>  :<div className="container-green"><div className="gg-check-r"></div><span ><i>Compleated :</i> {item.updated_at}</span></div>}
                    

                    </Row>
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
                    message={`Update todo's status with id # ${item.id}?`}
                    
                    ok={{
                        title:"change it!",
                        color: "success",
                        fn : ()=>{
                            this.toggleModalUpdate();
                            change(item.id);
                        }
                    }}
                    cancel={this.toggleModalUpdate}
                ><Row>
                    <Col lg={12}>You can change it back latter. (item #{item.id})</Col>
                   
                </Row></Confirm>

                <Confirm
                    active={this.state.modalRemove}
                    message={`Delete todo wwith id # ${item.id}?`}
                    ok={{
                        title:"sure",
                        color: "danger",
                        fn : ()=>{
                            this.toggleModalRemove();
                            remove(item.id)
                        }
                    }}
                    cancel={this.toggleModalRemove}
                ><Col lg={12}>You can`t change it back latter. (item #{item.id})</Col>

                    {/* <Footer /> */}
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


