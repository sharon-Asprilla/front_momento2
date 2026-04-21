import { Link } from "react-router-dom";

const Navbar  = () =>{
    return(
        <aside>
            <nav>
                 <Link to="/Home">Zenith Bonsai</Link>
                <a href="">filosofia</a>
                <a href="">galeria</a>
                <a href="">reservas</a>
            </nav>
            <div>

            </div>

        </aside>
    )
}

export default Navbar