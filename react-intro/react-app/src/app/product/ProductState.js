import {observable,action} from "mobx";
import restful from "../core/Restful";

//load from webpack external 
import config from 'config';


class productState{
    @observable products = [];
    @observable product ={name:'',year:''};

    @action getProducts(){
        restful.getJson(config.apiEndPoint+"/api/products").then(products=>this.setProducts(products));    
    }

    @action setProducts(products){
        this.products = products;
    }

    @action setProduct(product){
        this.product = product;
    }
    
    @action getProduct(id){
        restful.getJson(config.apiEndPoint+"/api/products/" + id).then(product=>this.setProduct(product));  
    }

    @action setProductValue(name,value){
        this.product[name] = value;
    }

    @action saveProduct(){
        if(this.product.id){
            restful.putJson(config.apiEndPoint+'/api/products/'+this.product.id, this.product).then(product=>{
                this.setProduct(product);
            });
        }else{
            restful.postJson(config.apiEndPoint+'/api/products/', this.product).then(product=>{
                this.setProduct(product);
            });
        }
    }

    @action createProduct(){
        this.product={
            name:'',
            year:2017
        };
    }
}

export default new productState();