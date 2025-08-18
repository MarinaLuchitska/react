import {UsersComponent} from "../components/user-component/users-component.tsx";
import {Outlet} from "react-router";

export const UserPage = ()=>{
    return(
        <>

            <Outlet/>
            <hr/>
            <UsersComponent/>
        </>
    )
}