import React,{Component} from 'react'
import './EmpLogin.css';
import {Button,ButtonToolbar} from 'reactstrap';
import  {EmployeeInfoModal } from './EmployeeInfoModal'

class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            addModalShow:false
        }
        this.inputsSubmit=this.inputsSubmit.bind(this);
    }

    inputsSubmit(event){
        event.preventDefault();
        const username=event.target.elements.userName.value;
        const password=event.target.elements.password.value;
        this.setState({username:username})
        this.setState({password:password})
        const Uname ="Bhagya";
        const Pword = "123"
        console.log("username=",username);
        console.log("password=",password);
        console.log("state Username:",this.state.username);
        console.log("state Password:",this.state.password);
        if(username === Uname && password === Pword){
          console.log("login success")
        
        }
        else{
            console.log("login  not success")
        }
    }
    render(){
        let addModalClose =()=>this.setState({addModalShow:false});
        return(
            <div>
            <div className="container">
                <h1>Employee Login Page</h1>
                 <div className="form">
                     <form onSubmit={this.inputsSubmit}>
                     <table>
                         <tr>
                             <td>
                                <label for ="userName"><b>Username</b></label>
                            </td>
                            <td>
                                <input className="inputs" type="text" name="userName" placeholder="Enter Your User Name " required></input>
                            </td>
                        </tr>
                        <tr>
                             <td>
                                <label for ="password"><b>Password</b></label>
                            </td>
                            <td>
                                <input  className="inputs"  type="password" name="password" placeholder="Enter Your User Password " required></input>
                            </td>
                        </tr>
                        <tr>
                            <button className="inputs">Login</button>
                        </tr>
                    </table>
                    </form>
                 </div>
            </div>,

            <ButtonToolbar>
                <Button variant="primary"
                    onClick={()=>this.setState({addModalShow:true})}>
                    Login
                </Button>
                <EmployeeInfoModal  
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                />
            </ButtonToolbar>
            </div>
        );
    }
}
export default LoginPage;