import "@pages/posts/style.posts.scss";
import React, {Component, useEffect, useState} from "react";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button, CardText, CardSubtitle, Toast, ToastBody, ToastHeader
} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios";
let postTitle = '';
let postBody = '';
let postComments1 = '';
let postComments2 = '';
let postComments3 = '';
let postEmail1 = '';
let postEmail2 = '';
let postEmail3 = '';


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
                // console.error(item);
            })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`)
            .then(response=>{               
                 setReviews(response.data);                
                 postComments1 =response.data[0].body; 
                 postComments2 =response.data[1].body; 
                 postComments3 =response.data[2].body; 
                 postEmail1 =response.data[0].email; 
                 postEmail2 =response.data[1].email; 
                 postEmail3 =response.data[2].email;   
            })
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.id}`)
            .then(response=>{
                console.log(response.data)
                setBody(response.data);                
            })
    },[]);
    return (
<Card>
<CardBody>
    <CardTitle tag="h5">Title: {postTitle}</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">for userID # {props.match.params.UserId}, post # {props.match.params.id}</CardSubtitle>
     <CardText><i>Body text :</i> {postBody}</CardText>
     <h5>comments:</h5>
     <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            {postEmail1}
          </ToastHeader>
          <ToastBody>
          {postComments1}
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
          {postEmail2}
          </ToastHeader>
          <ToastBody>
          {postComments2}
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-secondary my-2 rounded">
        <Toast>
          <ToastHeader>
          {postEmail3}
          </ToastHeader>
          <ToastBody>
          {postComments3}
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



