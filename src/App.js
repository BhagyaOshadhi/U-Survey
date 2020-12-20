import './App.css';
import React,{Component} from "react";
import Github from './Github'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth0Lock from 'auth0-lock'


class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            idToken:'',
            profile: {}
        };
    }

    static defaultProps = {
        clientID:'83h8S8tAD0GkxTNCDp6Val7RMK1rxcxf',
        domain:'dev-b7ey3t-4.au.auth0.com'
    }
    componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID,this.props.domain);
    this.lock.on("authenticated",(authResult)=>{
        console.log(authResult);
    });
    }
    showLock(){
        this.lock.show();
    }
    render() {

        return (
            <div className="App">
                <Header onLogin={this.showLock.bind(this)}/>
                <Github/>
            </div>
        );
    }
}
export default App;
