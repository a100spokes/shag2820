import "@pages/home/style.home.scss";
import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Home extends Component{
    constructor(props) {
        super(props);

    }


    render() {

        return(
            <div>
                <h1>home</h1>
                <a href={"/some-page"}>some</a>
                <Link to={"/some-page1"}>some1</Link>
            </div>
        )
    }
}


