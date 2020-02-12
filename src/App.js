import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Product from './Product';
import Contact from './contact';
import {Route, Switch} from 'react-router-dom'
import Navbar from './nav';
import SingleProduct from './singleproduct'



class App extends React {

  render(){
    return (
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/product" exact component={Product}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/product/:id" component={SingleProduct}/>
        </Switch>
      </div>
    );
  }

}

export default App;
