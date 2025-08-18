import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {CardPage} from "../pages/CardPage.tsx";


export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {
            path: 'users', element: <UserPage/>, children: [
                {path: ':id/carts', element: <CardPage/>}

            ]
        },
    ]
}])