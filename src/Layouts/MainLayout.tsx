import {Outlet} from "react-router";
import {MenuComponent} from "../Components/Menu/MainMenu.tsx";

const MainLayout = () => {
    return <>
        <MenuComponent/>
        <Outlet/>
    </>;
}

export default MainLayout;