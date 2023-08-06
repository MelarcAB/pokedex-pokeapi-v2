
import React from 'react';
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
function PokeAbilities({ abilities }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {abilities && abilities.abilities && abilities.abilities.map((ability, index) => (
                <div key={index} className="capitalize text-center md:text-left p-2 bg-gray-100 rounded">
                    {ability.ability.name}
                </div>
            ))}
        </div>
    )

}

export default PokeAbilities;