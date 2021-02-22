import React, {Component, useEffect, useState} from "react";

import {
    Card, Row, Col, CardBody,
    CardTitle, Button,ButtonGroup
} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios";


export default function ReadMorePost (props) {
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
    let [reviews, setReviews] = useState([]);
    //let [reviews, setReviews] = useState(null);

    useEffect(()=>{
        axios.get(`${process.env.API_URL}/posts/${props.match.params.id}`)
            .then(response=>{
                setItem(response.data);
            })

        axios.get(`${process.env.API_URL}/comments?postId=${props.match.params.id}`)
            .then(response=>{
                setReviews(response.data);
            })
    },[]);
    return (

        <Col lg={12} className={"some-class"}>
            {item!=null ? <div>
                <div>{item.id} {item.title}</div>
                <div>{item.body}</div>
                <Link to={"/posts"}>11111Назад</Link>
                {
                    reviews.map(item=><div key={item.id}>
                        <ul>
                            <li>{item.id} {item.name}</li>
                            <li>{item.email}</li>
                            <li>{item.body}</li>
                        </ul>
                    </div>)
                }
            </div> : null}

        </Col>

    )
}


