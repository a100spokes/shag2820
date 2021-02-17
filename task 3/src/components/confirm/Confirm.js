import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row,Col } from 'reactstrap';

const Confirm = (props) => {

    const {ok, message, active , cancel} = props;
 

    return (
        <div>
            <Modal isOpen={active} toggle={cancel}>
                <ModalHeader toggle={cancel}>{message}</ModalHeader>
                <ModalBody>

                    <Row>
                        <Col lg={12}>
                            {props.children}
                        </Col>
                        <Col lg={12}>
                            <Button color={ok.color} onClick={ok.fn}>{ok.title}</Button>
                            <Button color="secondary" onClick={cancel}>Отмена</Button>
                        </Col>
                    </Row>

                </ModalBody>
            </Modal>
        </div>
    );
}

export default Confirm;

























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