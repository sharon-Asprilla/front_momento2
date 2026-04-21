import Filosofia from "../pages/Filosofia"
import Galeria from "../pages/Galeria"
import Reservas from "../pages/Reservas"
import Home from "../pages/Home"


export let routerApp=[
    {
        path:"/",
        element:<home/>
    },
    {
        path:"/filosofia",
        element:<filosofia/>
    },
    {
        path:"/galeria",
        element:<galeria/>
    },
    {
        path:"/reservas",
        element:<reservas/>
    },
      

]