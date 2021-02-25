import "@pages/posts/style.posts.scss";
import React, {useEffect, useState} from "react";
import {
    Card, Row, Col, CardBody,
    CardTitle, Button, CardText, CardSubtitle, Toast, ToastBody, ToastHeader
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
    let [reviews, setReviews] = useState([]);  

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
      <Card>
      {item!=null ?
      <CardBody>
          <CardTitle tag="h5">Title: {item.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">for userID # {item.userId}, post # {item.id}</CardSubtitle>
           <CardText><i>Body text :</i> {item.body}</CardText>
           <Row>                    
             <Col lg={10}>
                  <Button color="warning" size="sm">
                  <Link to={"/posts"}>back</Link>
                  </Button>
              </Col>
          </Row>
           <h5>comments:</h5>
           {
                          reviews.map(item=><div key={item.id}>
                                <div className="p-3 my-2 rounded">
                                        <Toast>
                                          <ToastHeader className="comHeader">
                                          {item.email}
                                          
                                          </ToastHeader>
                                          <ToastBody>
                                          Name: {item.name}
                                          </ToastBody>
                                          <ToastBody>
                                          "<i>{item.body}</i>"
                                          </ToastBody>
                                        </Toast>
                                      </div>
                          </div>)
                      }         
      </CardBody>
      : null}
      </Card>
          )
}


