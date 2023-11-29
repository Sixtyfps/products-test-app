import React from 'react';

type ProductItemPropsType = {
    id: number,
    name: string,
    price: number,
    currency: string,
    category: string,
    description: string
}

export const ProductItem = (props: ProductItemPropsType) => {
    return (
        <div>
            <div><b>{props.name}</b></div>
            <span>Price: {props.price}</span>
            <span> {props.currency}</span>
            <div>Category: {props.category}</div>
        </div>
    );
};