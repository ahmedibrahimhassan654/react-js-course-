import React, { Component } from 'react';
import {CardList}from './components/card-list/card-list-component'
import './App.css';

class App extends Component{

  constructor(){
    super()
    this.state={
      monsters: [],
      searchField:''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(
    response=>response.json()
  )
  .then(
    users=>this.setState({monsters:users})
  )
  
  
}


render(){
  return(


    <div className="App">
      <input type='search' placeholder='search monster name'
        onChange={e => {
          this.setState({ searchField: e.target.value })
        }} />
      <CardList >
      {
        this.state.monsters.map(monster=>(
        <h1 key={monster.id}>{monster.name}</h1>
        )
          
        )
      }
      </CardList>
      
    </div>
  )
}


}



export default App;
