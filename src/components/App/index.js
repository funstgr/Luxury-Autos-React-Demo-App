import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Header from '../../containers/Header';
import Content from '../Content';
import CartContent from '../CartContent';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className = 'appDiv'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cart' component={Cart}/>
          </Switch>
      </div>
    );
  }
}

const Home = () => (<Content />);
const Cart = () => (<CartContent />);

export default App;
