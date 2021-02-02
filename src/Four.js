import React,{Component} from 'react'
import {Link} from 'react-router'

class Four extends Component{
    
    render(){
        return(
            <div>
                I am four
                <ul>
                    <li><Link to="/Four/123">Four Point One</Link></li>
                </ul>
                {this.props.children}
                
            </div>
        )
    }
}
export default Four;