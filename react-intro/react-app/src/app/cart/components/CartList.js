import React from "react";
import {inject, observer} from "mobx-react";
import CartItem from './CartItem';
 
 function CartList(props) {
    let {items, amount} = props.cart;

    let list = items.map((item)=>(
        <CartItem 
        item={item} 
        key={item.id} 
        onRemove={()=>{props.cart.removeItem(item.id)}}
        onUpdate = {(quantity)=>{props.cart.updateItem(item.id,quantity);}} />
    ));

    return (
        <div>
            Cart List {props.cart.amount}

            <table >
                <tbody>
                <tr>
                    <th> Name </th>
                    <th> Price </th>
                    <th> Quantity </th>
                    <th> Update </th>
                    <th> Delete </th>
                </tr>
                {list}
                </tbody>
            </table>
        </div>
    )
}

 export default inject("cart") 
                 (observer(CartList)) 