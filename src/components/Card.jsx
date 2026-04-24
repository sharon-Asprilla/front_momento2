const Card = ({ nombre}) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{nombre}</h3>
          
        </div>
    );
};

export default Card;
