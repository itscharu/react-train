import React from "react";

import {observer, inject} from "mobx-react";

import ProductWidget from "./ProductWidget";

@inject("productState")
@observer
export default class ProductList extends React.Component {

    componentDidMount() {
        this.props.productState.getProducts();
    }

    render() {

        let list= this.props.productState
             .products.map ( product => (
                 <ProductWidget key={product.id} product={product}>
                    {product.name}
                 </ProductWidget>
             ))

        return (
             
            <div>
                <div className="flex two">
                    {list}
                </div>
            </div>

        )
    }
}