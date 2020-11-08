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
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
//const firebaseApp=firebase.initializeApp(firebaseConfig)

class Usurvey extends Component{

    constructor(props){
        super(props);
        this.state = {
            uid : uuid.v1,
            studentName:"",
            answers:{
                answer1:"",
                answer2:"",
                answer3:""
            },
            isSubmitted:false
        };
        this.nameSubmit = this.nameSubmit.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        
      
    }
    nameSubmit(event){
        console.log("inside namesubmit");
        var studentName = this.refs.name;
        //var studentName = "Bhagya"
        console.log(studentName)
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
                    <input type="text" placeholder="Enter your name" refs="name" />
                </form>
            </div>
        } else if(this.state.studentName !== "" && this.state. isSubmitted === false){
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
               </div>
               <input type = "button" value = "submit" />
            </form>
        </div>
        }else if(this.state.isSubmitted === true){
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