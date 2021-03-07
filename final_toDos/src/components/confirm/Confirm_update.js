import React, { useState,Fragment,useEffect } from 'react';
import axios from "axios";
import "@elems/forms/style.core.scss";

import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const ConfirmUpdate = (props) => {
    export default function ConfirmUpdate (props) {

    const {ok, message, active , cancel, itemId,id, closeForm} = props;
    ////////////////////////
    let [item, setItem] = useState(null);    


    if(item !=null) {
    useEffect(()=>{
        axios.get(`${process.env.API_URL_XHR}/${itemId}`,{ 
            method: 'GET',
            headers: {
              'apptoken': process.env.API_KEY,
            }
          }
        )
        .then(response=>{
            setItem(response.data);            
        })
        .catch(error => console.error(error))
    },[]); 
}
    /////////////////////////////////////
//   console.log(item.title);

  console.log("item",item);
  console.log("itemId", itemId);
   let title;
   let title1;
  if(item !=null) {
    console.error(item.title)
    title=item.title;
}
console.error("let title",title)
  
//   console.log(item.id);
    // dataGet( );
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
                            // defaultValue={"description"}             
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
            // data.set('completed',0);
           
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
        
        /* function dataGet( ) { 
        axios.get(`${process.env.API_URL_XHR}/${itemId}`,{
            method : "GET",
            headers: {
                'apptoken': process.env.API_KEY,
            },
        })
        .then(response=>{
            console.log(response.data)
            console.log(response.data.title)
            console.log(response.data.description)
            console.log(response.data.deadline)
            
            
        })

        .catch(error=>{
            console.log(error);
           
        })} */
        
}

// export default ConfirmUpdate;