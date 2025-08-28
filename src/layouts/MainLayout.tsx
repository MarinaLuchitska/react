import {MainMenu} from "../components/MainMenu.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout=()=>{
    return(
        <>
            <MainMenu/>
            <hr/>
            <Outlet/>

        </>
    )

}