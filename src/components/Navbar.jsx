import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-200 px-6 py-4 shadow">
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-green-600">
                 Zenith Bonsai
            </Link>
            <div className="flex gap-6">
                
                <Link to="/filosofia" className="text-gray-700 hover:text-green-600 font-medium">
                    Filosofía
                </Link>
                <Link to="/galeria" className="text-gray-700 hover:text-green-600 font-medium">
                    Galería
                </Link>
                <Link to="/reservas" className="text-gray-700 hover:text-green-600 font-medium">
                    Reservas
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;