import React from 'react';
import '../product.css';

const Product = (props) => {
    return <div>
        <h2>{props.name}</h2>
        <p>£{props.price}</p>
        <p>{props.instock ? 'In Stock': 'Out of Stock'}</p>
    </div>
}

export default Product;