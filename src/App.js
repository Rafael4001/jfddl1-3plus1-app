import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList'



import Popup from './Popup'
import FavouriteBrands from './FavouriteBrands'

class App extends Component {
  render() {
    return (
      <div className="App">

        <ProductList/>

          <h1>wyszukiwarka</h1>
          <h1>najpopularniejsze marki</h1>
          <FavouriteBrands/>
          <Popup/>
      </div>
    );
  }
}

export default App;
