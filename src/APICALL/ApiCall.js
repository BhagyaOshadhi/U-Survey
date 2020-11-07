import React,{Component} from 'react'
class ApiCall extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts:[],
            subr : 'space'
        };
        this.getReddit = this.getReddit.bind(this);
    }

    componentWillMount(){
         this.getReddit();
    }

    getReddit = () =>{
        axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
    }

    render(){
        return(
            <div>
                I'm from Api call
            </div>
        )
    }
 
}
export default ApiCall;