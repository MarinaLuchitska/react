import {MainMenu} from "../components/Menu/MainMenu.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout=()=>{
    return<>
        <MainMenu/>
        <Outlet/>
    </>
}