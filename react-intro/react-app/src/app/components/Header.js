import React from 'react';
import {NavLink} from 'react-router-dom';

import { withRouter} from "react-router-dom";

import {inject, observer} from "mobx-react";

@inject("cart", "authState")
@withRouter
@observer
export default class Header extends React.Component{
    constructor(){
        super();
    }

    componentWillMount(){
        console.log("Component will mount");
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){
        console.log("Render called");
        return (
            <div>
                <h1>{this.props.title}</h1>
                <NavLink to="/" className="button" activeClassName="success"> Home </NavLink>
                <NavLink to="/about" className="button" activeClassName="success"> About </NavLink>
                <NavLink to="/contact" className="button" activeClassName="success"> Contact </NavLink>
                <NavLink to="/cart" className="button" activeClassName="success"> Cart [{this.props.cart.cartSize}] - Rs. {this.props.cart.amount} </NavLink>
                <NavLink to="/products" className="button" activeClassName="success"> Products </NavLink>

                {
                    this.props.authState.authenticated ? (
                            <button onClick={() => this.props.authState.logout()} >
                                Logout
                            </button>
                       ) : (
                            <NavLink to="/login" 
                                    className="button"
                                    activeClassName="success">
                                    Login
                                </NavLink>
                        )
                } 
                
            </div>
        );
    }
}


