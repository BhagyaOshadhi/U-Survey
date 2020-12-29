import React,{Component} from 'react'
import './Authen.css'
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDYPtj2z2_DSDgP2rL2UKzqdlWXpWENPUU",
    authDomain: "udemiloginapp.firebaseapp.com",
    databaseURL: "https://udemiloginapp-default-rtdb.firebaseio.com",
    projectId: "udemiloginapp",
    storageBucket: "udemiloginapp.appspot.com",
    messagingSenderId: "699412800367",
    appId: "1:699412800367:web:d5833da667c892662f3e9a",
    measurementId: "G-DF20QJQELF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
class Authen extends Component{
    constructor(props){
        super(props)
        this.state={
            err:""
        }
        this.Login=this.Login.bind(this);
        this.Signup=this.Signup.bind(this);
        this.Logout=this.Logout.bind(this);
    }
    Logout(){
        firebase.auth().signOut();
        var lout = document.getElementById('logout');
        lout.classList.add('hide');
    }
    Login(event){
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email,password);
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email,password);
        
        promise.then(user =>{
            var lout = document.getElementById('logout');
            lout.classList.remove('hide');
        });
        promise.catch(e => {
            var err = e.message;
            console.log(err);
            this.setState({err:err});

        });
    }
    Signup(event){
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email,password);
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email,password);
        promise
        .then((user)=>{
            var err = "Welcome" +user.email;
            firebase.database().ref('users/'+user.uid).set({
                email:user.email
            });
            console.log(user);
            this.setState({err:err});
        });
        promise
        .catch(e =>{
            var err = e.message;
            console.log(err);
            this.setState({err:err});
        })
    }
    render(){
        return(
            <div>
                 <input type="email" id="email" ref="email" placeholder="enter your email"></input><br/>
                 <input type="password" id="password" ref="password" placeholder="enter your password"></input><br/>
                 <p>{this.state.err}</p>
                 <button onClick={this.Login}>Log In</button>
                 <button onClick={this.Signup}>Sign up</button>
                 <button id="logout" className="hide" onClick={this.Logout}>Log out</button>
            </div>
        )
    }
}
export default Authen;
