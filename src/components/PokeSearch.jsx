import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { getAllPokemonList } from '../api/api.jsx';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const PokeSearch = () => {
    const [pokemonList, setPokemonList] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [isInputFocused, setInputFocused] = React.useState(false);
    const inputRef = useRef(null);
    const hideTimeout = useRef(null);

    useEffect(() => {
        return () => {
            if (hideTimeout.current) {
                clearTimeout(hideTimeout.current);
            }
        };
    }, []);

    const handleBlur = () => {
        // Usamos un setTimeout para dar tiempo al enlace para procesar el clic antes de ocultar el dropdown.
        hideTimeout.current = setTimeout(() => {
            setInputFocused(false);
        }, 150);
    };

    const handleLinkClick = () => {
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    useEffect(() => {
        const fetchPokemonList = async () => {
            const pokemonList = await getAllPokemonList();
            setPokemonList(pokemonList);
        };

        fetchPokemonList();
    }, []);

    const filteredPokemon = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
            <div className="relative w-full">
                <MagnifyingGlassIcon className="h-6 w-6 absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2" />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search Pokemon"
                    className="pl-12 pr-12 py-3 w-full rounded-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white shadow-lg"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setInputFocused(true)}
                    onBlur={handleBlur}
                />
                <button
                    className="absolute top-1/2 right-0 mr-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transform -translate-y-1/2"
                >
                    Search
                </button>
            </div>

            {search && isInputFocused && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg overflow-hidden z-10 w-full">
                    <ul>
                        {filteredPokemon.slice(0, 5).map((pokemon, index) => (
                            <Link to={`/pokemon/${pokemon.name}`} key={index} onClick={handleLinkClick} onMouseDown={(e) => e.preventDefault()}>
                                <li className="border-b p-2 hover:bg-gray-100 cursor-pointer">
                                    {pokemon.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};



export default PokeSearch;
