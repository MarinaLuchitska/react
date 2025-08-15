import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {PostPage} from "../pages/PostPage.tsx";

export const routes = createBrowserRouter ([
    {
        path: "/", element: <MainLayout/>, children:[
            {path:"users",element:<UserPage/>},
            {path:"posts",element:<PostPage/>}

        ]
    }
])