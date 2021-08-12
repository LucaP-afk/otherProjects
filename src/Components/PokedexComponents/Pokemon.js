import React, { useState, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import axios from 'axios'

const Pokemon = props => {
    const { history, match } = props
    const { params } = match
    const { pokemonId } = params
    const [pokemon, setPokemon] = useState(undefined)

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(function (response) {
                const { data } = response
                setPokemon(data)
            })
            .catch(function (error) {
                setPokemon(false)
            })
    }, [pokemonId])

    const generatePokemon = () => {
        const { name, id, species, height, weight, types, sprites } = pokemon
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
        const { front_default } = sprites
        return (
            <>
            <h1 className='namePokemonInfo'>
                {`${id}.`} {(name)}
                <img src={front_default} alt='sprite' className='spritePokemon' />
            </h1>
            <div className='pokemonInfo'>
                <img src={fullImageUrl} alt='sprite'/>
                <h2>Pokemon Info</h2>
                <p>
                    {<b>Species: </b>}<span className='speciesPokemon'>{species.name}</span>
                </p>
                <p><b>Height: </b>{height / 10} m</p>
                <p><b>Weight: </b>{weight / 10} kg</p>
                <div className='typesPokemon'>
                    <p><b>Types: </b></p>
                    {types.map((typeInfo) => {
                        const { type } = typeInfo
                        const { name } = type
                        return <p key={name}>{`${name}`}</p>
                    })}
                </div>
            </div>
            </>
        )
    }
    return (
        <div className='contentInfoPokemon'>
            {pokemon === undefined && <CircularProgress className='loaderPokemon' />}
            {pokemon !== undefined && pokemon && generatePokemon()}
            {pokemon === false && <p className='notFoundPokemon'>Sorry, Pokémon not found!</p>}
            <button className='backButtonPokemon' onClick={() => history.push('/Pokedex')}>Back</button>
        </div>
    )
}

export default Pokemon
