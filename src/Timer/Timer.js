import React,{Component} from 'react'
import './timer.css'

class Timer extends Component{
    constructor(props){
        super(props);
        this.state={
            clock:0
            
        }
        this.tiker=this.tiker.bind(this);

    }
    tiker(){
        this.setState({clock: new Date()-this.props.start})
    }
    componentDidMount(){
        setInterval(this.tiker,1000)
    }
    render(){
        console.log(this.props.start);
        return(
            <div>
                <p>You have been on this site since</p>
                <span> {this.state.clock}</span>
                <p>Seconds.</p>
            </div>
        )
    }
}
export default Timer