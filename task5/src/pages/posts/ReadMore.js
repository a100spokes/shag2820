import "@pages/posts/style.posts.scss";
import React, {Component, useEffect, useState} from "react";
//import Confirm from "@comp/confirm/Confirm";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button, CardText, CardSubtitle, Toast, ToastBody, ToastHeader
} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios";
let postTitle = '';
let postBody = '';
let postComments = '';

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
    let [item1, setBody] = useState(null);
    let [reviews, setReviews] = useState(null);

    useEffect(()=>{        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)        
            .then(response=>{
                console.log(response.data)
                setItem(response.data);                
                postBody =response.data.body;  
                postTitle=response.data.title;                
            })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`)
            .then(response=>{
                console.log(response.data)
                 setReviews(response.data);
                 postComments =response.data.email; 
            })
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`)
            .then(response=>{
                console.log(response.data)
                setBody(response.data);
                //  postComments =response.data.email; 
            })
    },[]);
    return (
        
       /*  <Col lg={12} className={"some-class"}>
            <div>read more {props.match.params.id}</div>            
            <div>postTitle</div>
            <div>{postTitle}</div>
            <div>postBody</div>
            <div>{postBody}</div>
            <div>postEmail</div>
            <div>{postComments}</div>
            <Link to={"/posts"}>назад</Link>
        </Col> */


<Card>
<CardBody>
    <CardTitle tag="h5">Title: {postTitle}</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">for userID # {props.match.params.id}</CardSubtitle>
     <CardText><i>Body text :</i> {postBody}</CardText>
     <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a white background — check it out!
          </ToastBody>
        </Toast>
      </div>
    <Row>                    
       <Col lg={10}>
            <Button color="warning" size="sm">
            <Link to={"/posts"}>назад</Link>
            </Button>
        </Col>
    </Row>
</CardBody>
</Card>


    )
}
console.log(postBody);
console.log(postComments);


