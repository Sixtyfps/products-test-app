import React from 'react';
import {useSelector} from "react-redux";
import {ProductsStateType} from "../../state/products-reducer";
import {ProductItem} from "../ProductItem/ProductItem";

export const ProductsContainer = () => {
    const {products, searchValue} = useSelector<ProductsStateType, ProductsStateType>(state  => state)
    const filteredProducts = products.filter(product =>
        product.name.trim().toLowerCase().includes(searchValue.trim().toLowerCase()))
    return (
        <div>
            {filteredProducts.map(el => <ProductItem id={el.id}
                                                     key={el.id}
                                                     name={el.name}
                                                     price={el.price}
                                                     currency={el.currency}
                                                     category={el.category}
                                                     description={el.description}></ProductItem>)}
        </div>
    );
};
