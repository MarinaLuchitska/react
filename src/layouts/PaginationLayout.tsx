import {Outlet} from "react-router-dom";
import {PaginationComponent} from "../components/pagination-component/pagination-component.tsx";

export const PaginationLayout =()=>{
    return(
        <>
        <Outlet/>
        <PaginationComponent/>
        </>
    )
}