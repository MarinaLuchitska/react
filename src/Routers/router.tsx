import {createBrowserRouter} from "react-router-dom";
import {Posts} from "../Pages/Posts.tsx";
import {Comments} from "../Pages/Comments.tsx";
import {Users} from "../Pages/Users.tsx";
import {Products} from "../Pages/Products.tsx"
import MainLayout from "../Layouts/MainLayout.tsx";


export const routes = createBrowserRouter([
    {
        path:"/",element:<MainLayout/>,children:[
            {path:"users",element:<Users/>},
            {path:"comments",element:<Comments/>},
            {path:"products",element:<Products/>},
            {path:"posts",element:<Posts/>}
        ]
    }
])

