import React, { useState,Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row,Col, ButtonGroup,ModalFooter } from 'reactstrap';

const Confirm = (props) => {

    const {ok, message, active , cancel} = props;
    //const [confirm, setModal] = useState(true);
/*
    class Modal extends Component {
        constructor() {
             this.state = {
                 confirm : false
             }
             this.setModal = this.setModal.bind(this)
        }


        setModal() {
            this.setState({
                confirm : !this.state.confirm
            })
        }

    }
*/

    return (
        <Fragment>
            <Modal isOpen={active} toggle={cancel}>
                <ModalHeader toggle={cancel}>{message}</ModalHeader>
                <ModalBody>

                    <Row>
                        <Col lg={12}>
                            {props.children}
                        </Col>                    
                    </Row>

                </ModalBody>

                <ModalFooter>                
                {/* <ButtonGroup> */}
                    <Button color={ok.color} onClick={ok.fn}>{ok.title}</Button>
                    <Button color="secondary" onClick={cancel}>cancel</Button>
                {/* </ButtonGroup> */}
                </ModalFooter>
            </Modal>
        </Fragment>
    );
}

export default Confirm;