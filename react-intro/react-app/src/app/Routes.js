import React from "react";

import {BrowserRouter as Router, Route, Switch}
    from "react-router-dom";

import {App} from "./App";

import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";

import Cart from './cart/components/Cart';
//import ProductList from './product/components/ProductList';

import ProductRoutes from "./product/Routes";


import Login from "./auth/components/Login";

import AuthRoute from "./auth/components/AuthRoute";


//Route config

export default function Routes () {
    return (
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <AuthRoute path="/cart" component={Cart} />
                <Route path="/products" component={ProductRoutes} />
                <Route path="/login" component={Login} />
            </Switch>
        </App>
    </Router>
    )
}