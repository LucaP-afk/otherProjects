import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import TicTacToe from './Projects/TicTacToe'
import Pokedex from './Projects/Pokedex'
import Calculator from './Projects/Calculator'
import GroceryList from './Projects/GroceryList'
import Counter from './Projects/Counter'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component= {Home} />
        <Route path={'/TicTacToe'} component={TicTacToe} />
        <Route path={'/Pokedex'} component={Pokedex} />
        <Route path={'/Calculator'} component={Calculator} />
        <Route path={'/GroceryList'} component={GroceryList} />
        <Route path={'/Counter'} component={Counter} />
      </Switch>
    </Router>
  );
}

export default App;
