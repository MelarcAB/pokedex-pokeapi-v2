import React, { useState } from 'react';
import { getMoveDetails } from '../../api/api.jsx';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function PokeMoves({ pokemonDetails }) {
    const [showAll, setShowAll] = useState(false);
    const [moveDetail, setMoveDetail] = useState(null);

    const toggleShowAll = () => setShowAll(!showAll);

    const handleMoveClick = async (moveName) => {
        const details = await getMoveDetails(moveName);
        setMoveDetail(details);
    }

    if (!pokemonDetails.moves) return null;

    const displayedMoves = showAll ? pokemonDetails.moves : pokemonDetails.moves.slice(0, 10);

    return (
        <div className="mt-4 relative">
            <h2 className="text-2xl font-bold mb-4 underline">Moves:</h2>
            <div className="grid grid-cols-2 gap-4">
                {displayedMoves.map((move, index) => (
                    <button
                        key={index}
                        onClick={() => handleMoveClick(move.move.name)}
                        className="transform transition-transform duration-300 hover:scale-105 bg-red-200 p-2 rounded-md text-center text-black shadow-lg hover:shadow-xl focus:outline-none"
                    >
                        <span className="block p-1">
                            {capitalize(move.move.name)}
                        </span>
                    </button>
                ))}
            </div>
            <button
                onClick={toggleShowAll}
                className="mt-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 focus:outline-none"
            >
                {showAll ? "Show Less" : "Show More"}
            </button>
            {moveDetail && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-64">
                        <h3 className="text-2xl font-bold mb-4">{capitalize(moveDetail.name)}</h3>
                        <p><strong>Type:</strong> {capitalize(moveDetail.type.name)}</p>
                        <p><strong>Power:</strong> {moveDetail.power}</p>
                        <p><strong>Accuracy:</strong> {moveDetail.accuracy}</p>
                        <button
                            onClick={() => setMoveDetail(null)}
                            className="mt-4 block bg-red-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PokeMoves;
