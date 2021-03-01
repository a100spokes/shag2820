import React from 'react';
import { Row,Col } from 'reactstrap';
import  "@comp/notification/Notification.style.scss";
// import './Loader.style.scss';

export default function Loader1() {

    // useEffect(()=>{
    //     setTimeout(()=>{
    //          props.hideNotification()
    //     },3000)
    // },[])

  return (                       
    <div className={'notif-bad'}>        
                <Row >
                    <Col lg={12}>
                    {"hoppy"}
                    {/* {"props.children"} */}
                    </Col>
                    
                </Row>            
    </div>
);
}

/*
*
*

const mapDispatchToProps = {
    hideNotification
}


export default connect(null,mapDispatchToProps)(Loader)
* */
 