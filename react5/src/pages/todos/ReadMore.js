import React, {Component, useEffect, useState} from "react";
//import Confirm from "@comp/confirm/Confirm";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button,ButtonGroup
} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios";


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
    //let [reviews, setReviews] = useState(null);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${props.match.params.id}`)
            .then(response=>{
                console.log(response.data)
                setItem(response.data);
            })
        // axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`)
        //     .then(response=>{
        //         console.log(response.data)
        //         setReviews(response.data);
        //     })
    },[]);
    return (

        <Col lg={12} className={"some-class"}>
            <div>read more {props.match.params.id}</div>
            <Link to={"/posts"}>Назад</Link>
        </Col>

    )
}


