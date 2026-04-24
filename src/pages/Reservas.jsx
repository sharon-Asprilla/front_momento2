
import Formulario from "../components/Formulario";

const Reservas = () => {
    return (
        <div className="py-12 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Reserva un Taller</h1>
                    <p className="text-gray-600 text-lg">
                        Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
                    </p>
                </div>
                
                <Formulario />
            </div>
        </div>
    );
};

export default Reservas;