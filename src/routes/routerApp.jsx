import Filosofia from "../pages/Filosofia"
import Galeria from "../pages/Galeria"
import Reservas from "../pages/Reservas"
import Home from "../pages/Home"
import Layout from "../components/Layout"


export let routerApp=[
    {
        path:"/",
        element:<Layout/>,
        children:[
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
    },
]