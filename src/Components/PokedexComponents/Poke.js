import React, { useState, useEffect } from 'react'
import { Toolbar, Grid, CardContent, CardMedia, CircularProgress } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'


const Poke = props => {

    const [pokemonData, setPokemonData] = useState({})
    const [filter, setFilter] = useState('')

    const handleSearchChange = (e) => {
        setFilter(e.target.value)
    }

    const { history } = props

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(function (response) {
                const { data } = response
                const { results } = data
                const newPokemonData = {}
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                    }
                })
                setPokemonData(newPokemonData)
            })
    }, [])

    const getPokemonCard = (pokemonId) => {
        const { id, name, sprite } = pokemonData[pokemonId]
        return (
            <>
                <div className='cardPokemon' onClick = {() => history.push(`/Pokedex/${pokemonId}`)}>
                    <CardMedia
                        className='cardMediaPokemon'
                        image={sprite}
                    />
                    <CardContent className='cardContentPokemon'>
                        <p className='namePokemon'>{`${id}. ${(name)}`}</p>
                    </CardContent>
                </div>
            </>
        )
    }

    return (
        <div>
            <Toolbar className='toolbarPokemon'>
                <div className='searchBox'>
                    <SearchIcon className='searchIconPokemon'/>
                    <input type='text' className='searchFieldPokemon' onChange={handleSearchChange} autoFocus/>
                </div>
            </Toolbar>
            {pokemonData ? (
                <Grid container spacing={2} className='gridContainerPokemon'>
                    {Object.keys(pokemonData).map(pokemonId =>
                        pokemonData[pokemonId].name.includes(filter) && getPokemonCard(pokemonId)
                    )}
                </Grid>
            ) : (
                <CircularProgress />
            )}
        </div>
    )
}

export default Poke