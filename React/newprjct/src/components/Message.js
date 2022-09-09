import { Component} from 'react';

export default class Message extends Component {
    render() {
        return <><h2>This is a class Component</h2>
        {this.props.prpomess}
        </>
    }
}

  