import React from 'react'
import { useState, useEffect, useRef } from 'react';
import PokeSearch from '../components/PokeSearch'
import PokedexElement from '../components/Pokedex/PokedexElement'
import { getPokemonList } from '../api/api.jsx';
import PokedexDetail from './PokedexDetail'
import { Link } from 'react-router-dom';
import loadingGif from '../assets/pokball1.gif'

const PokedexList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const loadRef = useRef(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null); // Declaración de estado para selectedPokemon

    const loadMore = async () => {
        setIsLoading(true);
        const newPokemon = await getPokemonList(25, offset);
        setPokemonList((prev) => [...prev, ...newPokemon]);
        setOffset((prev) => prev + 25);
        setIsLoading(false);
    };

    useEffect(() => {
        loadMore();
    }, []);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isLoading) {
                    loadMore();
                }
            },
            { threshold: 1 },
        );
        if (loadRef.current) observer.observe(loadRef.current);
        return () => observer.disconnect();
    }, [loadRef, isLoading]);

    return (
        <div className={`flex ${selectedPokemon ? 'flex-row' : 'flex-col'} w-full mx-auto px-4 space-y-4`}>

            <div className='w-full'>
                <div className="w-full pt-10">
                    <PokeSearch />
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    {pokemonList.map((pokemon, index) => (
                        <Link to={`/pokemon/${pokemon.name}`} key={index}>
                            <PokedexElement pokemon={pokemon} onClick={() => setSelectedPokemon(pokemon.name)} />
                        </Link>
                    ))}
                </div>
                {isLoading && (
                    <div className="flex justify-center mt-5">
                        <img src={loadingGif} alt="Loading" className="w-16 h-16" />
                    </div>
                )}
                <div ref={loadRef} className="mb-10" />

                <div ref={loadRef} className="mb-10" />
            </div>
        </div>
    );
}

export default PokedexList
