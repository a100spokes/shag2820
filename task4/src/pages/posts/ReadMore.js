import "@pages/posts/style.posts.scss";
import React, {Component, useEffect, useState} from "react";
//import Confirm from "@comp/confirm/Confirm";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button,ButtonGroup
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
        
        <Col lg={12} className={"some-class"}>
            <div>read more {props.match.params.id}</div>            
            <div>postTitle</div>
            <div>{postTitle}</div>
            <div>postBody</div>
            <div>{postBody}</div>
            <div>postEmail</div>
            <div>{postComments}</div>
            <Link to={"/posts"}>назад</Link>
        </Col>
    )
}
console.log(postBody);
console.log(postComments);


