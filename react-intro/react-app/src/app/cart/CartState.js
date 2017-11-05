import {observable, action, computed} from "mobx";

import generate from "./mock-data";

class CartState {
    @observable items = [];

    loadItems() {
        this.items = generate();
        console.log(this.items);
    }

    @computed get cartSize(){
        console.log("cart size called");
        return this.items.length;
    }

    @computed get amount(){
        let sum = 0;
        for (let i=0; i < this.items.length; i++){
            sum += this.items[i].price;
        }
        return sum;
    }

    @action removeItem(id){
        console.log(id);
        this.items = this.items.filter(item=>item.id!=id);
    }

    @action updateItem(id,quantity){
        for(let item of this.items){
            if(item.id==id){
                item.quantity = parseInt(quantity);
                break;
            }
        }
    }

    @action addItem(product){
        this.items.push({
            id:product.id,
            name:product.name,
            price:product.price,
            quantity:1
        });
    }

    @action empty(){
        this.items = [];
    }
}

export default new CartState();