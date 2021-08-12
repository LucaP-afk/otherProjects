import React from 'react'
import Box from './Box.js'
import Calculator from './ProjectImg/Calculator.png'
import Pokedex from './ProjectImg/Pokedex.png'
import TicTacToe from './ProjectImg/TicTacToe.png'
import GroceryList from './ProjectImg/GroceryList.png'
import Counter from './ProjectImg/Counter.png'
import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
      <div className="app">
        <div className='titleContainer'>
          <h1>Hey buddy!</h1>
          <h2 className='subtitleHome'>Here you can find some of my little projects that I realized to improve my skills.</h2>
          <h3>Click on any of these and try them out</h3>
          <Link to='/TicTacToe' className='link'>
          <Box
            Title='Tic Tac Toe'
            Logo={TicTacToe}
            Description='Play Tic Tac Toe with a friend'
          />
          </Link>
          <Link to='/Pokedex' className='link'>
          <Box 
            Title='Pokédex'
            Logo={Pokedex}
            Description='Find a pokémon into my pokédex thanks to an API'
          />
          </Link>
          <Link to='/Calculator' className='link'>
          <Box 
            Title='Calculator'
            Logo={Calculator}
            Description='Doing your math has never been easier'
          />
          </Link>
          <Link to='/GroceryList' className='link'>
          <Box 
            Title='Grocery List'
            Logo={GroceryList}
            Description='Add, remove or edit items to your shopping list'
          />
          </Link>
          <Link to='Counter' className='link'>
          <Box 
            Title='Counter'
            Logo={Counter}
            Description='Click + or - to change number and enjoy randomColor effect'
          />
          </Link>
        </div>
      </div>
    );
  }

  export default Home