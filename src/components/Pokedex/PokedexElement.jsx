import { useState, useEffect } from 'react';
import { getPokemonDetails } from '../../api/api.jsx';

import TypeLabel from './TypeLabel.jsx';
const POKPOKEMON_3D_URL = import.meta.env.VITE_POKEMON_3D_URL;

const PokedexElement = ({ pokemon, onClick }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {

        getPokemonDetails(pokemon.name).then(setPokemonDetails);
    }, [pokemon.name]);

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    //                    <img className="w-full h-full object-contain object-center" src={pokemonDetails.sprites.other['official-artwork'].front_default} alt={pokemon.name} />

    return (
        <div onClick={onClick} className="relative bg-gray-800 bg-opacity-30 rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:filter hover:brightness-125 h-80 w-64">
            {pokemonDetails && (
                <div className="absolute inset-x-0 bottom-8 p-10 mb-10">
                    <img className="w-full h-full object-contain object-center" src={pokemonDetails.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                </div>
            )}
            <div className="absolute bottom-0 w-full p-4 text-white bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg">
                <h1 className="text-lg sm:text-xl font-semibold">#{pokemonDetails?.id}</h1>
                <div className="flex items-center space-x-2">
                    <h1 className="text-lg sm:text-xl font-semibold">{capitalize(pokemon.name)}</h1>
                </div>
                <div className="flex flex-wrap justify-start mt-2">
                    {pokemonDetails && pokemonDetails.types.map((type, index) => (
                        <TypeLabel key={index} type={type.type.name} />
                    ))}
                </div>
            </div>
        </div>

    );











}

export default PokedexElement