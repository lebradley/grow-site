import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Product from './components/product';
const Products = require('./fakedata/products.json');

//https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react

const ProductList = Products.map((p, i) => 
    <Product key = {i} name ={p.name} price={p.price} type = {p.type} instock={p.instock}></Product>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <Navigation></Navigation>
        </div>
        <ul>{ProductList}</ul>
      </div>
    );
  }
}

export default App;
