import React, {Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import {Footer} from './components/Footer';
import PropTypes from "prop-types";

export class App extends Component{

    constructor(){
        super();
        this.show = true;
    }

    /* componentDidMount(){
        setTimeout(()=>{
            console.log("app comp mounted");
            this.show = !this.show;
            this.forceUpdate();
        },3000);
    } */

    getChildContext(){
        console.log("get context called");
        return {
            appTitle:"React App",
            theme:"white"
        };
    }

    render(){
        //return  React.createElement("h1",{id:"header"}, "React App");
        return(
            <div>
                {this.show?<Header title="React App" />:''}

                <div>
                    {this.props.children}
                </div>

                <Footer year={2017} company="React app" />
            </div>
        );
    }
}

App.childContextTypes = {
    appTitle: PropTypes.string,
    theme:PropTypes.string
};