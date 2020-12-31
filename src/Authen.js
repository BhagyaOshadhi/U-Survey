import React,{Component} from 'react';
import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyAapuEvU_j_Z48UQ1qqazbzJYA1MgV9Xss",
    authDomain: "udemisignin.firebaseapp.com",
    projectId: "udemisignin",
    storageBucket: "udemisignin.appspot.com",
    messagingSenderId: "1015400213396",
    appId: "1:1015400213396:web:e852cac32e4ececb9dfd81",
    measurementId: "G-Q0KDZ19EEH"
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
        this.google=this.google.bind(this);
    }
    google(){
        console.log("iam google "); 
        var provider = new firebase.auth.GoogleAuthProvider();
        var promise = firebase.auth().signInWithPopup(provider);

        promise.then(result =>{
            var user = result.user;
            console.log(result);
            firebase.database().ref('users/'+user.uid).set({
                email:user.email,
                name:user.displayName
            });
        });
        promise.catch(e =>{
            var msg = e.message;
            console.log(msg);
            this.setState({err:msg});
        })

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
        .then(user=>{
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
                 <button id="google" className="" onClick={this.google}>sign in with google</button>
            </div>
        )
    }
}
export default Authen;