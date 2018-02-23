import React from 'react';
import '../product.css';

const Product = (props) => {
    return <div className="product">
        <h2>{props.name}</h2>
        <h3>{props.type}</h3>
        <p>£{props.price}</p>
        <p>{props.instock ? 'In Stock': 'Out of Stock'}</p>
    </div>
}

export default Product;