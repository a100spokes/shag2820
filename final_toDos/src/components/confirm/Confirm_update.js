import React, { useState,Fragment } from 'react';
import axios from "axios";
import "@elems/forms/style.core.scss";

import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ConfirmUpdate = (props) => {

    const {ok, message, active , cancel, itemId,id, closeForm} = props;
 

    return (
        <Fragment>        
            <Modal isOpen={active} toggle={cancel}>
                <ModalHeader toggle={cancel}>{message}</ModalHeader>
                <ModalBody>
                    <Form className="mainForm" onSubmit={submit}>   

                        <FormGroup>
                            <Label for="titleText">Title</Label>
                            <Input 
                            required
                            type="text" 
                            name="title" 
                            id="titleText" 
                            defaultValue={"title"}             
                            // placeholder={"title"}             
                            />
                        </FormGroup>  

                        <FormGroup>
                            <Label for="exampleText">Description</Label>
                            <Input 
                            required
                            type="textarea" 
                            name="description" 
                            id="exampleText"                             
                            defaultValue={"description"}             
                            // placeholder={"description"}             
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
            
                        <Button color="info">update</Button>

                    </Form>
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


    function submit(e) { 
        e.preventDefault();
        const form = e.target;
        let data =  new FormData(e.target);
            data.set('order',0);
            data.set('completed',0);
           
 ////////////////////
//  props.submit(data,props.id);
 //////////////////////////
/*
* как получить айди из тудус/лист ++++++++++
*/
        axios.put(`${process.env.API_URL_XHR}/${itemId}`,data,{ //todos: get from prop
            headers: {
                'apptoken': process.env.API_KEY,
            },
        })
            .then(response=>{
                console.log(response)                               
                form.reset();                
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