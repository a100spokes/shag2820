import { Component} from 'react';
export default class ClassEv extends Component {
    handleClick () {
        console.log("Event1");    
    }
    render() {
       
        return(
        <><div>Class component</div>
        <button onClick={this.handleClick}>Click</button>
        </>
        )
    }
}