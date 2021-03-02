import React, { useState } from 'react';
import { Row,Col } from 'reactstrap';
import  "@comp/notification/Notification.style.scss";

// const Notification = (props) => {
export default function Notification(props) {


    // const {ok, message, active , cancel} = props;
  

    return (                       
        // <div className={'notif-' + props.children}>        
         <div className={'notif-' + props.status}>     
    {/* // <div className={'notif-bad'}>         */}

                    <Row >
                        <Col lg={12}>
                        {props.children}
                        </Col>
                        
                    </Row>            
        </div>
    );
}

// export default Notification;