import Card from "../components/Card";

const Galeria = () => {
    const plantas = [
        {
            
            nombre: "Arce Japonés",
            
        },
        {
            
            nombre: "Pino Negro",
            
        },
        {
            
            nombre: "Ficus Retusa",
            
        },
        {
        
            nombre: "Olmo Chino",
            
           
        }
    ];

    return (
        <div className="py-12 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Nuestra Colección</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plantas.map((planta) => (
                        <Card
                            
                            nombre={planta.nombre}

                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Galeria