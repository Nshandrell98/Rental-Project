import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Product from './components/Product'
import Single from './components/Single'
import Make from './components/Make'
import Help from './components/Help'



class App extends Component {
  render() {
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>

          <Route path="/products" component={Product}></Route>

          <Route path="/product/:id" component={Single}></Route>

          <Route path="/make/:make" component={Make}></Route>
          <Route path="/help" component={Help}></Route>
           
          <Route render={() => <Redirect to="/"/>}/>
       </Switch>
       <Footer />
      </Router>
    
    )}};

export default App;
