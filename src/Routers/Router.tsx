
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.tsx";
import {UsersDummyjsonPage} from "../Pages/UsersDummyjson.tsx";
import {UsersJsonPlaceholderPage} from "../Pages/UserJsonplaceholder.tsx";
import {PostsJsonPlaceholderPage} from "../Pages/PostsJsonplaceholder.tsx";
import {PostsDummyJsonPage} from "../Pages/PostsDummyjson.tsx";
import {CommentsJsonPlaceholderPage} from "../Pages/CommentsJsonplaceholder.tsx";
import {CommentsDummyJsonPage} from "../Pages/CommentsDummyjson.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            { path: "users/jsonplaceholder", element: <UsersJsonPlaceholderPage /> },
            { path: "users/dummyjson", element: <UsersDummyjsonPage /> },
            { path: "posts/jsonplaceholder", element: <PostsJsonPlaceholderPage /> },
            { path: "posts/dummyjson", element: <PostsDummyJsonPage /> },
            { path: "comments/jsonplaceholder", element: <CommentsJsonPlaceholderPage /> },
            { path: "comments/dummyjson", element: <CommentsDummyJsonPage /> },
        ],
    },
]);