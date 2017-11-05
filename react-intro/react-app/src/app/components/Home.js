import React from "react";//from node modules

import Like from "./Like";

export class Home extends React.Component
{
    constructor(props){
        super (props);
        this.state ={
            likes:1000

        }

    }
    increment() {
        console.log("home Increment");

        //calls render method
        this.setState({
                likes:this.state.likes + 1
            })
    }

    decrement() {
        console.log("home Increment");

        //calls render method
        this.setState({
                likes:this.state.likes - 1
            })
    }

    
    render() {
        console.log("home render called");
        return (
            <div>
                <h1>Home</h1>

                <Like likes={this.state.likes}
                incr = { ()=> this.increment()}
                />

            </div>
        )
    }
}
