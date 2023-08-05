import { ArrowLeftIcon } from '@heroicons/react/24/solid';

function PokeStats({ pokemonDetails }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {pokemonDetails.stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center bg-gray-200 p-3 rounded-lg shadow-md">
                    <span className="font-bold text-2xl text-blue-600">{stat.base_stat}</span>
                    <span className="capitalize text-md font-semibold text-gray-600">{stat.stat.name}</span>
                </div>
            ))}
        </div>
    );
}

export default PokeStats;
