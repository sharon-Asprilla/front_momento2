import Filosofia from "../pages/Filosofia"
import Galeria from "../pages/Galeria"
import Reservas from "../pages/Reservas"
import Home from "../pages/Home"


export let routerApp=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/filosofia",
        element:<Filosofia/>
    },
    {
        path:"/galeria",
        element:<Galeria/>
    },
    {
        path:"/reservas",
        element:<Reservas/>
    },
      

]