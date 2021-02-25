import React, { useState } from 'react';
import { Row,Col } from 'reactstrap';
import  "@comp/notification/Notification.style.scss";

const Notification = (props) => {

    /*
* 
*

const mapDispatchToProps = {
    hideNotification
}


export default connect(null,mapDispatchToProps)(Loader)
* */
  

    return (                       
        <div className={'notif-' + props.status}>        
                    <Row >
                        <Col lg={12}>
                        {props.children}
                        </Col>
                        
                    </Row>            
        </div>
    );
}

export default Notification;