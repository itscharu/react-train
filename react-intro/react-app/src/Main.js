//bootstrapping

//bring react into HTML

import React from 'react';
import {render} from 'react-dom';

import Routes from './app/Routes';
import CartState from './app/cart/CartState';
import productState from './app/product/ProductState';
import authState from "./app/auth/AuthState";
import {useStrict} from 'mobx';

useStrict(true);

console.log("PRODUCTION", PRODUCTION);

//CartState.loadItems();

let store = {
    cart:CartState,
    productState: productState,
    authState:authState
};

import {Provider} from "mobx-react";

render(<Provider {...store} ><Routes /></Provider>, document.getElementById("root"));
