import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Contacts extends Component{
    constructor(props) {
        super(props);

    }


    render() {

        return(
            <div>
                <h1>Contacts</h1>
                <h3>ПРИЕМНАЯ</h3>
                <p>+375 17 344 57 72
                office@belwood.ru</p>
            </div>
        )
    }
}


