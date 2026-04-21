import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = ()=>{
    return (

        <main>
            <div>
                <Navbar/>
            </div>
            <div className="main-home">
                <h2>El arte de la paciencia</h2>
                <p>Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. Un espacio para reconectar con la naturaleza.</p>

                <button >Reserva un taller</button>
                
            </div>
            <Footer/>
        </main>
       

    )
    
}

export default Home