import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';
import {Searchbox} from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: ''

    }
    // this.handleChange=this.handleChange.bind(this)
    // THIS BECOMES IRRELEVANT IF WE USE AN ARROW FUNCTION IN PLACE
    //OF THE METHOD

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users => this.setState({monsters: users}))

  }
  
  handleChange=(e) => {
    this.setState({searchField:e.target.value})
  }

  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ); 
    return (
      <div className="App">
         <h1>Monsters Rolodex</h1> 
         <Searchbox 
         placeholder='search monsters'
         handleChange = {this.handleChange}
         />
        < CardList monsters = {filteredMonsters}/>
            </div>
    )
  }
}

export default App; 