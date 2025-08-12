import {createBrowserRouter} from "react-router-dom";
import EmptyPage from "../Pages/EmptyPages.tsx";
import MainLayout from "../Layouts/MainLayout.tsx";

export const routes = createBrowserRouter([
    {
        path:"/",element:<MainLayout/>,children:[
            {path:"users",children:[
                    {path:"jsonplaceholder",element:<EmptyPage title= "/users/jsonplaceholder"/>},
                    {path:"dummyjson",element:<EmptyPage title= "/users/dummyjson"/>}
                ]},
            {path:"posts",children:[
                    {path:"jsonplaceholder",element:<EmptyPage title= "/posts/jsonplaceholder"/>},
                    {path:"dummyjson",element:<EmptyPage title= "/posts/dummyjson"/>}

                ]},
            {path:"comments",element:<EmptyPage title="/comments/jsonplaceholder"/>}
        ]}
]);



