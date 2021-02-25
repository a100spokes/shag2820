import "@pages/todos/style.todos.scss";
import React, {Component, useEffect, useState} from "react";
//import Confirm from "@comp/confirm/Confirm";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button, CardSubtitle
} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios";

let todoTitle = '';

export default function ReadMore (props) {
    /*
    * constructor(props){
    *   this.setState={
    *       item:null
    *   }
    *   this.setItem= this.setItem.bind(this);
    * }
    *
    * setItem(){
    *   this.setState={
    *       item : someVal
    *   }
    * }
    * */
    let [item, setItem] = useState(null);
    let [reviews, setReviews] = useState(null);
    //let [reviews, setReviews] = useState(null);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${props.match.params.id}`)
            .then(response=>{
                console.log(response.data)
                setItem(response.data);
                todoTitle=response.data.title; 
                console.error(todoTitle);
            })
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`)
            .then(response=>{
                console.log(response.data)
                 setReviews(response.data);
                //  postComments =response.data.email; 
            })
        // axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`)
        //     .then(response=>{
        //         console.log(response.data)
        //         setReviews(response.data);
        //     })
    },[]);
    return (
        
<Card>
<CardBody>
<CardTitle tag="h5">Title: {todoTitle}{/* {props.match.params.title} */}</CardTitle>
<CardSubtitle tag="h6" className="mb-2 text-muted">for todos # {props.match.params.id}</CardSubtitle>        
        <Row>                    
       <Col lg={10}>
            <Button color="warning" size="sm">
            <Link to={"/todos"}>назад</Link>
            </Button>
        </Col>
    </Row>
</CardBody>
</Card>
    )
}
console.error(todoTitle);



