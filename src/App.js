import React, { Component } from 'react';

import {CardList} from './components/card-lists/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
    componentDidMount(){
      console.log('dsadasdasdasdas');
      fetch('https://jsonplaceholder.typicode.com/users') 
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
    }
  
  render(){
  const { monsters, searchField  } = this.state;
  // const monsters = this.state.monsters;
  // const searchField = this.state.searchField;
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <h1>gyanesh singh ka app</h1>
      <SearchBox 
       placeholder='search monsters'
       handleChange =  {e => this.setState({searchField: e.target.value})}/> 
      <CardList monsters = {filteredMonsters} />
    </div>
  );
}
}

export default App;

/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>{this.state.string}</p>
<button onClick= {() => this.setState({string: 'hello Rajpoot'})}>click me</button>
</header> */
