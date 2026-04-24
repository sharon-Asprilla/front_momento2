import { useState } from "react";
import { guardarSolicitud } from "../helpers/local-storage";

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        nivel: "Principiante (Nunca he tenido un Bonsái)",
        mensaje: ""
    });

    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.nombre || !formData.email) {
            alert("Por favor completa los campos obligatorios");
            return;
        }

        
      
        
        console.log("Datos del formulario:", formData);
      
    

    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
                {mensajeEnviado && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                        ¡Gracias! Tu solicitud ha sido enviada correctamente. Nos contactaremos pronto.
                    </div>
                )}

            <form onSubmit={handleSubmit} className="space-y-6">
               
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Ana Silva"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                    />
                </div>

              
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                    />
                </div>

              
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Nivel de experiencia
                    </label>
                    <select
                        name="nivel"
                        value={formData.nivel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                    >
                        <option>Principiante (Nunca he tenido un Bonsái)</option>
                        <option>Intermedio (He trabajado con bonsáis)</option>
                        <option>Avanzado (Tengo experiencia)</option>
                    </select>
                </div>

              
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Mensaje (Opcional)
                    </label>
                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="¿Qué te gustaría aprender?"
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 resize-none"
                    ></textarea>
                </div>

              
                <button
                    type="submit"
                    className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                    Enviar Solicitud
                </button>
            </form>
            </div>
        </div>
    );
};

export default Formulario;
