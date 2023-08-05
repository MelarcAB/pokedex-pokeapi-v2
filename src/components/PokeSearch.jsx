import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const PokeSearch = () => {
    return (
        <div >
            <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
                <MagnifyingGlassIcon className="h-6 w-6 absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Search Pokemon"
                    className="pl-12 pr-12 py-3 w-full rounded-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white shadow-lg"
                />
                <button
                    className="absolute top-1/2 right-0 mr-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transform -translate-y-1/2"
                >
                    Search
                </button>
            </div>
        </div>
    );
};


export default PokeSearch;
