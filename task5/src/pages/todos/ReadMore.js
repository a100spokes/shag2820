import "@pages/todos/style.todos.scss";
import React, {Component, useEffect, useState} from "react";
//import Confirm from "@comp/confirm/Confirm";
import {
    Card, Row, Col, CardBody,
    CardTitle, CardText, Button, CardSubtitle
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
    
/*
    *!^^^orign S^^^
     */
  /*   useEffect(()=>{
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
              
            })
        
    },[]); */


    /* axios.post(`${process.env.API_URL_XHR}`,data,{
        headers: {
            'apptoken': process.env.API_KEY,
        },
    }) */


    /*
    *!^^^orign E^^^
     */
    
    useEffect(()=>{
        axios.get(`${process.env.API_URL_XHR}/${props.match.params.id}`,{
            method: 'GET',
            headers: {
              'apptoken': process.env.API_KEY,
            }
          }
        )
        .then(response=>{
            setItem(response.data);            
        })
        .catch(error => console.error(error))
    },[]); 
    ///////////////////
    return (
        
<Card>
{item!=null ?
<CardBody>
<CardTitle tag="h5">Title: {item.title}</CardTitle>
<CardSubtitle tag="h6" className="mb-2 text-muted">for todos # {props.match.params.id}</CardSubtitle>  
<CardText><i>Description :</i> {item.description}</CardText>      
<CardText><i>Dead line :</i> {item.dead_line}</CardText>      
<CardText><i>Completed :</i> {item.completed}</CardText>      
<CardText><i>created :</i> {item.created_at}</CardText>      
<CardText><i>updated:</i> {item.updated_at}</CardText>      
        <Row>                    
       <Col lg={10}>
            <Button color="warning" size="sm">
            <Link to={"/todos"}>назад</Link>
            </Button>
        </Col>
    </Row>
</CardBody>
: null}
</Card>
    )
}
// console.error(todoTitle);



