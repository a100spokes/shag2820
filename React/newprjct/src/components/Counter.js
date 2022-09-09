import { Component} from 'react';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
         }
         this.increm = this.increm.bind(this) //1
    }

    increm=()=> {
     this.setState({counter: this.state.counter + 1});   
    }
    /* increm() {
     this.setState({counter: this.state.counter + 1});   
    } */ 1
    render() {
        return <><h3>Counter value is: {this.state.counter} </h3>
        <button onClick={this.increm}>ON</button>
        {/* <button onClick={()=>this.increm()}>ON</button> */}
        <button onClick={()=>this.setState({counter: this.state.counter = 0})}>OFF</button>
        </>
    }
}