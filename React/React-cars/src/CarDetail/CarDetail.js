import React from 'react';
import {  useParams } from "react-router-dom";
// import { Routes, Route, useParams } from 'react-router-dom';
/* export default class CarDetail extends React.Component {
    render() {
  console.log(this.props)

        return (
            <div  style={{textAlign: 'center'}}>
                 
                <h1>NO1</h1>
            </div>
        )
    }
} */

const CarDetail = () => {
    // const CarDetail = props => {
        let   userId   = useParams();        
        console.log(userId )
         
       
       
        
       return (
        <div  style={{textAlign: 'center'}}>
        {/* <h1>{this.props.match.params.name}</h1> */}
        <h1>{userId.name}</h1>
    </div>
      )
       
    }
    
    export default  CarDetail 