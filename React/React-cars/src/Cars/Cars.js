import React, { useState } from 'react';
import Car from './Car/Car' 
import { useNavigate } from "react-router-dom";
/* export default class Cars extends React.Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ]
  }
 
  

  render() { 
    
    
        console.log(this.props)
        console.log(this.contexts)
    

    return (
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
         
        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
            />
          )
        })}
      </div>
    )
  }
} */

const Cars = () => {
// const Cars = props => {
  
  const [cars, setCars] = useState( 
    [{name: 'Ford', year: 2018},
    {name: 'Audi', year: 2016},
    {name: 'Mazda', year: 2010}]
    );
     

    let navigate = useNavigate();
     
    function goToHomePage (){
      console.log(navigate)
      navigate("/", { replace: true });
      // navigate(-1);//BACK
      
    }
    // const goToHomePage = ()=>{return console.log(this)};
    
   return (
    <div style={{
      width: 400,
      margin: 'auto',
      paddingTop: '20px',
      textAlign: 'center'
    }}>
       <button onClick={goToHomePage}>Go to home page</button>
       <hr/>
        {cars.map((cars, index) => {
        return (
          <Car
            key={index}
            name={cars.name}
            year={cars.year}             
          >
               
          </Car>
            
           
        )
      })}  
    </div>
  )
   
}

export default  Cars 