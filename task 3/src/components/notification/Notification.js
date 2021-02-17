import React, { useState } from 'react';
import { Row,Col } from 'reactstrap';
import "./Notification.style.scss"

const Notification = (props) => {

    // const {ok, message, active , cancel} = props;
  

    return (        
        <div className="notif">           
                    <Row >
                        <Col lg={12}>
                        {props.children}
                        </Col>
                        
                    </Row>            
        </div>
    );
}

export default Notification;