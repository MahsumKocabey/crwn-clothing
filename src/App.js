// import logo from './logo.svg';
import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css'

class App extends Component {
  constructor(){
    super();

    this.state = {

    }
    /* Commented this bind out because we call es6 arrow function for the handleChange method. */
    // this.handleChange = this.handleChange.bind(this);
  }


  render(){

    return (
      <div>
        <HomePage />
      </div>
    )
  }
}

export default App;
