import React, {Component} from "react";


export default class ErrorPage extends Component{
    constructor(props) {
        super(props);
    }



    render() {
        let {item,change, remove} = this.props;

        return(
            <h1>page not found</h1>
        )
    }
}


