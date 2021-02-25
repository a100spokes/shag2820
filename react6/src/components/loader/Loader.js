import React from 'react';
import './Loader.style.scss';

export default function Loader() {

    // useEffect(()=>{
    //     setTimeout(()=>{
    //          props.hideNotification()
    //     },3000)
    // },[])

  return (
      <div className={"loader"}>
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
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
