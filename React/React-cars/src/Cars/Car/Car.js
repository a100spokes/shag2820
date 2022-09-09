import React from 'react'
import './Car.scss'
import { useNavigate } from "react-router-dom";

const Car = props => {
  // console.log(props)
  let navigate = useNavigate();

 /*  function goTo (){
    console.log('/cars/' + props.name.toLowerCase())
      navigate('/cars/' + props.name.toLowerCase(), { replace: true });
  } */
  return (
    <div 
    className={'Car'}
    onClick={()=>navigate('/cars/' + props.name.toLowerCase())}
    // onClick={goTo}
    >
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
}

export default  Car 