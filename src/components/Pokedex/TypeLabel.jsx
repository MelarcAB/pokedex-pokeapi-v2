const TypeLabel = ({ type }) => {
    const color = getTypeColor(type);
    return (
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold mr-2 mb-2 ${color}`}>
            {capitalize(type)}
        </span>
    );
};


const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const getTypeColor = (type) => {
    switch (type) {
        case 'normal':
            return 'bg-gray-400 text-white border ';
        case 'fighting':
            return 'bg-red-500 text-white border ';
        case 'flying':
            return 'bg-indigo-300 text-white border ';
        case 'poison':
            return 'bg-purple-600 text-white border ';
        case 'ground':
            return 'bg-yellow-600 text-white border ';
        case 'rock':
            return 'bg-yellow-900 text-white border ';
        case 'bug':
            return 'bg-green-500 text-white border ';
        case 'ghost':
            return 'bg-indigo-800 text-white border ';
        case 'steel':
            return 'bg-gray-500 text-white border ';
        case 'fire':
            return 'bg-red-600 text-white border ';
        case 'water':
            return 'bg-blue-500 text-white border ';
        case 'grass':
            return 'bg-green-600 text-white border ';
        case 'electric':
            return 'bg-yellow-300 text-yellow-900 border ';
        case 'psychic':
            return 'bg-pink-500 text-white border ';
        case 'ice':
            return 'bg-blue-200 text-white';
        case 'dragon':
            return 'bg-indigo-900 text-white';
        case 'dark':
            return 'bg-black text-white';
        case 'fairy':
            return 'bg-pink-200 text-pink-800';
        default:
            return 'bg-gray-200 text-gray-700';
    }
};


export default TypeLabel;
