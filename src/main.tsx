import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {routes} from "./routers/router.tsx";

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
