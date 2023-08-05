import react from 'react'
import { useState } from 'react'
import axios from 'axios'


//function to get getPokemonList
const POKEAPI_URL = import.meta.env.VITE_POKEAPI_URL;


const getPokemonList = async (limit = 25, offset = 0) => {
    const response = await axios.get(POKEAPI_URL + `pokemon?limit=${limit}&offset=${offset}`)
    return response.data.results
}

const getAllPokemonList = async (limit = 1500, offset = 0) => {
    const response = await axios.get(POKEAPI_URL + `pokemon?limit=${limit}&offset=${offset}`)
    return response.data.results
}



const getPokemonDetails = async (pokemonName) => {
    const response = await axios.get(POKEAPI_URL + `pokemon/${pokemonName}`);
    return response.data;
}
export { getPokemonList, getPokemonDetails, getAllPokemonList }