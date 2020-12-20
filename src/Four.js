import React,{Component} from 'react'
import {Link} from 'react-router'
import {Route, Switch} from "react-router-dom";
import App from "./App";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import FourPointOne from "./FourPointOne";

import NoMatch from "./NoMatch";
class Four extends Component{
    
    render(){
        return(
            <div>
                I am four
                <ul>
                    <li><Link to="/four/123">Four Point One</Link></li>
                </ul>

                <Switch>
                        <Route exact path="/four/:id" component={FourPointOne}/>

                    <Route  component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}
export default Four;