import React,{Component} from 'react'
var firebase = require('firebase/app')
var uuid = require('uuid')
//import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyB7FG5C0zxknXq2qtqx7_6JmgGRmyitidw",
    authDomain: "u-survey-53841.firebaseapp.com",
    databaseURL: "https://u-survey-53841.firebaseio.com",
    projectId: "u-survey-53841",
    storageBucket: "u-survey-53841.appspot.com",
    messagingSenderId: "1002080038116",
    appId: "1:1002080038116:web:0f8307817c2eeb3f7a10f1",
    measurementId: "G-QRW31DLER4"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class Usurvey extends Component{

    constructor(props){
        super(props);
        this.state = {
            uid : uuid.v1,
            studentName:" Bhagya",
            answers:{
                answer1:"",
                answer2:"",
                answer3:""
            },
            isSubmitted:true
        };
        this.nameSubmit = this.nameSubmit.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        
      
    }
    nameSubmit(event){
        var studentName = this.refs.name.value;
        this.setState({studentName:studentName},function(){
            console.log(this.state);
        });
    }
    answerSelected(event){
        // var answers=this.state.answers;
        // if(event.target.name === "answer1" ){
        //     answers.answer1 = event.
        // }
    }
    questionSubmit(){

    }

  
    render(){
        var studentName;
        var questions;

        if(this.state.studentName === '' && this.state.isSubmitted === false){
            studentName = <div>
                <h4> Please let us your name:</h4>
                <form onSubmit = {this.nameSubmit}>
                    <input type="text" placeholder="Enter your name" refs="name"/>
                </form>
            </div>
        } else if(this.state.studentName !== "" && this.state. isSubmitted === false){
        studentName=<h1>welcome to Usurvey,{this.state.studentName}</h1>
        questions=<div>
            <h2>Here are some Questions</h2>
            <form onSubmit={this.questionSubmit}>
               <div>
                   <label>What kind of Cause You like the most?</label><br/>
                   <input type = "radio" name="answer1" value="Technology" onChange={this.answerSelected}/>Technology
                   <input type = "radio" name="answer1" value="Science" onChange={this.answerSelected}/>Science
                   <input type = "radio" name="answer1" value="Mathamatics" onChange={this.answerSelected}/>Mathematics
               </div>
               <input type = "submit" value = "submit" />
            </form>
        </div>
        }else if(this.state.isSubmitted === true){
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