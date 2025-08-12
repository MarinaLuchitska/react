import {Outlet} from "react-router-dom";
import {MainMenuComponent} from "../Components/Menu/MainMenu.tsx";

const MainLayout = () =>{
    return(
        <>
        <MainMenuComponent/>
            <hr/>
        <Outlet/>
        </>
    )
}
export default MainLayout