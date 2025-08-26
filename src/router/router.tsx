import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {index:true, element: <Navigate to="/users?page=1" replace /> },

            {
                path: "users",
                element: <PaginationLayout />,
                children: [
                    {index:true, element: <UsersPage /> },
                ],
            },
        ],
    },
]);