import React, { useEffect, useState } from 'react';
import { getPokemonDetails } from '../api/api.jsx';
import TypeLabel from '../components/Pokedex/TypeLabel';
import { useParams } from 'react-router-dom';
import PokeSearch from '../components/PokeSearch';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import PokeImage from '../components/PokedexDetail/PokeImage.jsx';
import PokeStats from '../components/PokedexDetail/PokeStats';
import PokeAbilities from '../components/PokedexDetail/PokeAbilities.jsx';
import PokeMoves from '../components/PokedexDetail/PokeMoves';
import { useNavigation } from 'react-router-dom';

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
        <div className="w-full px-4 md:px-12 py-8">
            <div className="mb-6 md:mb-12">
                <PokeSearch />
            </div>
            <div className="mb-5 max-h-screen px-4 md:px-0 py-6 md:py-12 flex flex-col items-center text-white">

                <button
                    onClick={() => navigate('/')}
                    className="text-white hover:text-gray-200 transition-colors duration-200 mb-6 flex items-center">
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Back
                </button>

                <div className=" bg-white text-black rounded-xl shadow-lg w-full md:max-w-2xl lg:max-w-3xl p-6 md:p-12 space-y-8 md:space-y-0 md:space-x-6 md:flex md:items-start">

                    <PokeImage pokemonDetails={pokemonDetails} className="mb-6 md:mb-0" />

                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-bold mb-4 underline">Types:</h2>
                            <div className="flex flex-wrap justify-center">
                                {pokemonDetails.types.map((type, index) => (
                                    <TypeLabel key={index} type={type.type.name} className="mr-2 mb-2 bg-blue-500 text-white rounded px-3 py-1" />
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 underline">Stats:</h2>
                            <PokeStats pokemonDetails={pokemonDetails} />
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 underline">Abilities:</h2>
                            <PokeAbilities abilities={pokemonDetails} />
                        </section>
                        <section>
                            <h2 className="text-xl font-bold mb-4 underline">Moves:</h2>
                            <PokeMoves pokemonDetails={pokemonDetails} />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );





}

export default PokedexDetail;
