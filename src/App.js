import React, { Component } from "react";
// styles
import "./App.css";
// data
import productData from "./produtcs.json";
// componentes
import { ProductListing } from "./components/ProductListing";

class App extends Component {
  render() {
    const { products, ingredients } = productData;
    return (
      <div className="container">
        <h1>Products</h1>
        <ProductListing products={products}/>
      </div>
    );
  }
}

export default App;
