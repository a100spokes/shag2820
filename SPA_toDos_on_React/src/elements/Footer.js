import React from "react";
import Logo from "@comp/logo/Logo";
import "./style.scss";

export default function Footer() {
    const title = "hello";
    const titleNew = title.split("").join(" ");


    return(
        
        <footer>
            <div class="container">
            <div class="glitch" data-text="Made on React">Made on React</div>
  <div class="glow">Made on React</div> 
  </div>  
        </footer>      
    )
    /* return(
        <footer>
            <Logo bgColor={"green"} text={"logo footer"} />
            <div>{titleNew}</div>
            <div>{Date.now() + title}</div>
        </footer>
    ) */
}