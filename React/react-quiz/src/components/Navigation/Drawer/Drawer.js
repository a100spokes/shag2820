import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../ActiveQuiz/UI/Backdrop/Backdrop'

const links = [
    1,2,3
]

class Drawer extends Component {
    renderLinks() {
        return links.map((links, index) =>{
            return(
                 
                    <li key={index}>
                        <a > Link {links}</a>
                    </li>
               
            )
        })
    }

    render () {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return ( 
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ?<Backdrop onClick={this.props.onClose} /> : null}
            </>
        )          
   }
}

export default Drawer