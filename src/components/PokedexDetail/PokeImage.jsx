import React from 'react';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
function PokeImage({ pokemonDetails }) {
    return (
        <div className="flex flex-col items-center md:items-start md:mr-8 mb-4 md:mb-0 transition-all duration-200 ease-in-out">
            <img className="w-40 h-40 object-contain object-center rounded-full border-4 border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-200 ease-in-out transform hover:scale-110" src={pokemonDetails.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemonDetails.name} />
            <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-200">#{pokemonDetails.id} {capitalize(pokemonDetails.name)}</h1>
        </div>
    );
}

export default PokeImage;
