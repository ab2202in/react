import React,{Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state ={count :props.initialCount};
    }

    increment =() =>{
        this.setState({count :this.state.count +1});
    }

    render(){
        return(
            <>
            <h1>Class Components</h1>
            <p>count : {this.state.count}</p>
            <button onClick={this.increment}>INCREMENT</button>
            </>
        )
    }
}

export default Counter;