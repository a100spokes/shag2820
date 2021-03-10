import React, { useState,Fragment,useEffect } from 'react';
import axios from "axios";
import "@elems/forms/style.core.scss";
import Loader from "@comp/loader/Loader";
import {hideNotification,showNotifFailTodos,showNotifAllOKTodos,showNotifRemove,showNotifRemoveNot,showNotifUpdate,} from "@redux/actions/notification";
import {connect} from "react-redux";

import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

 
    export default function ConfirmUpdate (props) {

        const {ok, message, active , cancel, itemId,} = props;
        
        let titleTab;
        let description;
        let dead_line;
        let comp;
         
            useEffect(()=>{
                axios.get(`${process.env.API_URL_XHR}/${itemId}`,{ 
                    method: 'GET',
                    headers: {
                        'apptoken': process.env.API_KEY,
                    }
                }
                )
                .then(response=>{
                    
                    comp=response.data.completed;
                     
                    // console.error("HERE IS COMP",comp);
                    titleTab=response.data.title;  
                    // console.error(titleTab);
                    description=response.data.description;  
                    // console.error(description);
                    dead_line=response.data.dead_line;    
                })
                .catch(error => console.error(error))
            });  
            
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
                            // defaultValue={title}             
                            defaultValue={titleTab}             
                            // defaultValue={titleS}             
                            // placeholder={title}             
                            />
                        </FormGroup>  

                        <FormGroup>
                            <Label for="exampleText">Description</Label>
                            <Input 
                            required
                            type="textarea" 
                            name="description" 
                            id="exampleText"                             
                            defaultValue={description}             
                            // defaultValue={item.id}             
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
                        <FormGroup>
                            {/* Undone <input type={"radio"} value={0} name={"completed"}/> */}
                            <Label for="completed">it`s done</Label>
                            <Input
                            // required
                            type="radio"
                            name="completed"
                            id="completed"
                            value={1}
                            placeholder="date placeholder"
                            />
                        </FormGroup>   
            
                        <Button color="info">update</Button>

                    </Form>
                </ModalBody>

                        <ModalFooter>                
                            
                                <Button color={ok.color} onClick={ok.fn}>{ok.title}</Button>
                                <Button color="secondary" onClick={cancel}>cancel</Button>
                             
                        </ModalFooter>
            </Modal>
           
        </Fragment>
    );
 

    function submit(e) { 
        e.preventDefault();
        const form = e.target;
        let data =  new FormData(e.target);
            data.set('order',0);
            // data.set('completed',0);
           
 ////////////////////
//  props.submit(data,props.id);
 //////////////////////////
 
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
               
                
            })
    
        }
        
         
        
}

 