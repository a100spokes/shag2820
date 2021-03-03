import React, { useState } from 'react';
import axios from "axios";
import "@elems/forms/style.core.scss";

import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ConfirmUpdate = (props) => {

    const {ok, message, active , cancel} = props;
 

    return (
        <div>
            <Modal isOpen={active} toggle={cancel}>
                <ModalHeader toggle={cancel}>{message}</ModalHeader>
                <ModalBody>

                    {/* <Row>
                        <Col lg={12}>
                            {props.children}
                        </Col>                    
                    </Row> */}

<Form className="mainForm" onSubmit={submit}>   
                <FormGroup>
                    <Label for="titleText">Title</Label>
                    <Input 
                    required
                    type="text" 
                    name="title" 
                    id="titleText" 
                    placeholder={"title"}             
                    />
                </FormGroup>  

                <FormGroup>
                    <Label for="exampleText">Description</Label>
                    <Input 
                    required
                    type="textarea" 
                    name="description" 
                    id="exampleText" 
                    placeholder={"description"}             
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDate">Dealine</Label>
                    <Input
                    required
                    type="date"
                    name="dead_line"
                    id="exampleDate"
                    placeholder="date placeholder"
                    />
                </FormGroup>   
            
                <Button>ADD</Button>
            </Form>

                </ModalBody>

                         <ModalFooter>                
                            {/* <ButtonGroup> */}
                                <Button color={ok.color} onClick={ok.fn}>{ok.title}</Button>
                                <Button color="secondary" onClick={cancel}>cancel</Button>
                            {/* </ButtonGroup> */}
                        </ModalFooter>
            </Modal>
        </div>
    );


    function submit(e) { 
        e.preventDefault();
        const form = e.target;
        let data =  new FormData(e.target);
            data.set('order',0);
            data.set('completed',0);

/*
* как получить айди из тудус/лист
*/
        axios.put(`${process.env.API_URL_XHR}/68`,data,{
            headers: {
                'apptoken': process.env.API_KEY,
            },
        })
            .then(response=>{
                console.log(response)                
                // setNotif(true);  
                form.reset();
                /* setTimeout(()=>{
                    setNotif(false);  
                },4000); */
                
            })     
                   
            
            .catch(error=>{
                console.log(error);
                // setNotifText('Something went wrong! Todos wasn`t added.');
                // setNotif(true); 
                // setNotifClass('bad');
                /* setTimeout(()=>{
                    setNotif(false);  
                    setNotifClass('good');
                    setNotifText('done!');
                },4000); */
            })
    }
}

export default ConfirmUpdate;