// import logo from './logo.svg';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    /* Commented this bind out because we call es6 arrow function for the handleChange method. */
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render(){
    // Getting rid of using this.state everytime.
    const { monsters, searchField } = this.state;

    // Creating a filter function for the search box.
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Roladex</h1>        
        <SearchBox
          placeholder = 'Search Monsters'
          handleChange = { this.handleChange }
        />
        <CardList monsters={ filteredMonsters }/>
      </div>
    )
  }
}

export default App;
