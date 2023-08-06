import React from 'react';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
function PokeImage({ pokemonDetails }) {
    return (
        <div className="flex flex-col items-center md:items-start md:mr-8 mb-4 md:mb-0 transition-all duration-200 ease-in-out">
            <img
                className="w-60 h-60 object-contain object-center border-blue-500 transition-all duration-200 ease-in-out transform hover:scale-110"
                src={pokemonDetails.sprites.versions['generation-v']['black-white'].animated.front_default || pokemonDetails.sprites.other['official-artwork'].front_default}
                alt={pokemonDetails.name}
            />

            <h2 className="text-sm sm:text-3xl font-bold mt-4 text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-200">#{pokemonDetails.id}</h2>
            <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-200"> {capitalize(pokemonDetails.name)}</h1>
        </div>
    );
}

export default PokeImage;
