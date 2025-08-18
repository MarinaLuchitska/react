import {Outlet} from "react-router";
import {MainMenu} from "../components/menu/MainMenu.tsx";

export const MainLayout = () => {
    return <div>
        <MainMenu/>
        <Outlet/>
    </div>
};