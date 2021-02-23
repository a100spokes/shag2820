import "@pages/about/style.about.scss";
import React, {Component} from "react";
import { Jumbotron, Button } from 'reactstrap';

export default class About extends Component{
    constructor(props) {
        super(props);

    }


    render() {

        return(
            <Jumbotron className="jumBody2">
                <h1>About</h1>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum viverra urna, ut commodo mi porta ut. Phasellus dapibus, elit eu suscipit hendrerit, lorem leo mattis purus, vel pulvinar orci nunc at lectus. Praesent ante arcu, malesuada in enim non, malesuada dictum arcu. Aenean sit amet est nec ligula porta commodo et vitae neque. Aliquam quis ipsum tincidunt, scelerisque eros in, porta velit. Nulla ultricies dui sit amet ultrices suscipit. Aenean vehicula vulputate dolor, at venenatis felis tincidunt vitae. In dictum pulvinar nisi et porttitor. Maecenas at neque lacus. Pellentesque lacinia nunc non luctus imperdiet. Morbi vitae turpis at nibh fringilla volutpat. Nunc placerat semper augue, sed sodales tellus rhoncus ullamcorper. Cras viverra urna eu mauris tristique volutpat. Aliquam id ultricies ante.</p>

                <p>Vivamus ultricies sodales imperdiet. Nulla facilisi. Pellentesque facilisis vehicula luctus. Integer efficitur, dui vel porta scelerisque, neque nibh aliquam lectus, nec congue mi neque et lorem. Sed feugiat elit eu urna egestas aliquam. Vestibulum eget faucibus purus, sit amet porta mauris. Integer consequat non massa et eleifend. Nam ornare aliquam elit luctus consectetur. In condimentum massa vel massa interdum porta. Duis congue dui sit amet malesuada tristique. Sed dapibus orci vel fermentum accumsan.</p>
                </Jumbotron>
        )
    }
}
