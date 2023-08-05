import React, { useEffect, useState } from 'react';
import { getPokemonDetails } from '../api/api.jsx';
import TypeLabel from '../components/Pokedex/TypeLabel';
import { useParams } from 'react-router-dom';
import PokeSearch from '../components/PokeSearch';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import PokeImage from '../components/PokedexDetail/PokeImage.jsx';
import PokeStats from '../components/PokedexDetail/PokeStats';

function PokedexDetail() {
    const { name } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const details = await getPokemonDetails(name);
            setPokemonDetails(details);
        };
        fetchPokemonDetails();
    }, [name]);

    if (!pokemonDetails) return <div>Loading...</div>;
    return (
        <div className="w-full px-6 md:px-0">
            <div className="w-full pt-10">
                <PokeSearch />
            </div>
            <div className="max-h-screen p-6 flex flex-col items-center justify-center text-white overflow-auto">

                <button
                    onClick={() => navigate(-1)}
                    className="text-white hover:text-gray-200 transition-colors duration-200 mb-6 flex items-center">
                    <ArrowLeftIcon className="h-5 w-5 mr-1" />
                    Back
                </button>
                <div className="flex flex-col md:flex-row items-center justify-center bg-white text-black rounded-xl p-8 shadow-xl w-full md:w-3/4 lg:w-1/2">

                    <PokeImage pokemonDetails={pokemonDetails} />

                    <div className="w-full md:w-auto">
                        <h2 className="text-xl font-bold mb-2">Types:</h2>
                        <div className="flex flex-wrap justify-center md:justify-start mb-8">
                            {pokemonDetails.types.map((type, index) => (
                                <TypeLabel key={index} type={type.type.name} className="mr-2 mb-2 bg-blue-500 text-white rounded px-2 py-1" />
                            ))}
                        </div>
                        <h2 className="text-xl font-bold mb-2">Stats:</h2>
                        <PokeStats pokemonDetails={pokemonDetails} />

                        <h2 className="text-xl font-bold mb-2">Abilities:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {pokemonDetails.abilities.map((ability, index) => (
                                <div key={index} className="capitalize">
                                    {ability.ability.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );




}

export default PokedexDetail;
