import React from 'react';
import PropTypes from 'prop-types';

export default class Like extends React.Component{
    constructor(props, context){
        super(props);
        console.log("Like constructor called");   
        console.log("Like context: ", context);    
    }

    //called many times based on parent render method
    componentWillReceiveProps(nextProps){
        console.log("current ", this.props);
        console.log("next ", nextProps);        
    }

    //decide whether render should be called or not 
   /*  shouldComponentUpdate(nextProps, nextState){
        console.log("should update", nextProps);
        //return false; //calls render
        if(nextProps.likes %5 == 0){
            return true;
        }
        return false;
    }
 */
    render(){
        console.log("Like render called");
        return (
            <div>
                <h1>Likes: {this.props.likes}</h1>
                <button onClick={()=>{
                        this.props.incr();
                    }}>+1</button>
                {/* <button onClick={()=>{
                    this.props.decr();}}>-1</button> */}
            </div>
        );
    }
}

Like.contextTypes = {
    appTitle:PropTypes.string,
    theme:PropTypes.string
};


