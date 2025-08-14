import { Outlet } from "react-router-dom";
import { MainMenuComponent } from "../Components/Menu/MainMenu";

const MainLayout = () => (
    <>
        <MainMenuComponent />
        <Outlet />
    </>
);

export default MainLayout;