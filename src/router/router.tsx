import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {CarsComponent} from "../components/cars-component.tsx";
import {CarsCreateComponent} from "../components/cars-create.tsx";

export const routes =createBrowserRouter([
    {
        path:"/",element:<MainLayout/>,children:[
            {path:"/cars",element:<CarsComponent/>},
            {path:"/cars/create",element:<CarsCreateComponent/>}
        ]

    }
])