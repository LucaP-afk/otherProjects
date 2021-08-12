import React from 'react'
import './Pokedex.css'
import Poke from '../Components/PokedexComponents/Poke'
import Pokemon from '../Components/PokedexComponents/Pokemon'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { Route, Switch, Link } from 'react-router-dom'


function Pokedex() {
    return(
        <div>
            <div className='titleContainerPokedex'>
                <button><Link to='/'><FaRegArrowAltCircleLeft className='backButton' /></Link></button>
                <h1 className='titlePokedex'>Pokédex</h1>
            </div>
            <div className='pokedexContainer'>
                <Switch>
                    <Route 
                        exact 
                        path='/Pokedex' 
                        render={(props) => <Poke {...props} />} 
                    />
                    <Route
                        exact
                        path='/Pokedex/:pokemonId'
                        render={(props) => <Pokemon {...props} /> }
                    />
                </Switch>
            </div>
        </div>
    )
}

export default Pokedex