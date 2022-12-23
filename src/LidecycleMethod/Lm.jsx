import React, { Component } from "react";

class Lm extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("component did mount : when component render first time");
    }

    increment(){
        this.setState({
            count: this.state.count+1
        })
    }
    render() { //browser doesnt understand jsx so it converts into the lang which browser can understand

        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>{this.increment()}}>click me</button> 
            </>

        )
    }

}
export default Lm;