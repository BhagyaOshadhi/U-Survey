import React,{Component} from 'react'
 import firebase from 'firebase'
// var firebase = require('firebase');
var uuid = require('uuid')


var firebaseConfig = {
    apiKey: "AIzaSyC73iBXgJ-uAorW4ME4qus7d2tVWPbIQz8",
    authDomain: "udemi-12880.firebaseapp.com",
    databaseURL: "https://udemi-12880-default-rtdb.firebaseio.com",
    projectId: "udemi-12880",
    storageBucket: "udemi-12880.appspot.com",
    messagingSenderId: "460782014184",
    appId: "1:460782014184:web:d3d2843b313f2360f0c35d",
    measurementId: "G-7TT70FLS96"
  };

  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

//  const firebaseApp = firebase.initializeApp(firebaseConfig)
//  firebase.analytics();


class Usurvey extends Component{

    constructor(props){
        super(props);
        this.state = {
            uid : uuid.v1(),
            studentName:"",
            answers:{
                answer1:"",
                answer2:"",
                answer3:""
            },
            isSubmitted:false
        };
        this.nameRef = React.createRef();
        // this.passwordRef = React.createRef();
        this.nameSubmit = this.nameSubmit.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        
      
    }
    nameSubmit(event){
        console.log("inside namesubmit");
        // var studentName = this.nameRef.value;
        // var studentName = this.nameRef.current.value;
        // var password = this.passwordRef.current.value;
        var studentName = this.refs.name.value
        console.log(studentName)
        // console.log(password)
        this.setState({studentName:studentName},function(){
            console.log(this.state);
            console.log("inside namesubmit");
        });
    }
    answerSelected(event){
        var answers=this.state.answers;
        console.log("inside answerSelected");
        if(event.target.name === "answer1" ){
             answers.answer1 = event.target.value;
        }
        this.setState({answers:answers},function(){
            console.log(this.state)
        })
    }
    questionSubmit(){
        console.log("inside question Submit");
        firebase.database().ref('U-Survey/'+this.state.uid).set({
            studentName: this.state.studentName,
            answers:this.state.answers
        });
        this.setState({isSubmitted:true},function(){
            console.log(this.state)
        })
    }

  
    render(){
        var studentName;
        var questions;

        if(this.state.studentName === '' && this.state.isSubmitted === false){
            console.log("first condition")
            studentName = <div>
                <h4> Please let us know your name:</h4>
                <form onSubmit = {this.nameSubmit}>
                    {/* <input type="text" placeholder="Enter your name" ref={ (ref) => this.nameRef=ref }/> */}
                    <input type="text" placeholder="Enter your name" ref="name"/>
                    {/* <input type="text" placeholder="Enter your name" ref={ this.nameRef}/> */}
                    {/* <input type="text" placeholder="Enter your name" ref={ this.passwordRef} /> */}
                </form>
            </div>
        } else if(this.state.studentName !== "" && this.state.isSubmitted === false){
            console.log("second condition")
            studentName=<h1>welcome to Usurvey,{this.state.studentName}</h1>
             questions=<div>
                <h2>Here are some Questions</h2>
                <form onSubmit={this.questionSubmit}>
                    <div>
                        <h4>What kind of Cause You like the most?</h4><br/>
                        <input type = "radio" name="answer1" value="Technology" onChange={this.answerSelected}/>Technology
                        <input type = "radio" name="answer1" value="Science" onChange={this.answerSelected}/>Science
                        <input type = "radio" name="answer1" value="Mathamatics" onChange={this.answerSelected}/>Mathematics
                        <input type = "submit" value = "submit" />
                    </div>
                   
                </form>
            </div>
        }else if(this.state.studentName !== "" &&  this.state.isSubmitted === true){
            console.log("third condition")
            studentName=<h2>Thanks, {this.state.studentName}</h2>
        }
        return(
            <div>
                I'm from Usurvey
                {studentName}
                ================================================
                {questions}
            </div>
        )
    }
 
}
export default Usurvey;