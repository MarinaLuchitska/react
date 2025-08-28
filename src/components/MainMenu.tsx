import {Link} from "react-router-dom";

export const MainMenu = ()=>{
    return(
        <>
            <Link to='/cars'>cars</Link>
            <Link to='/cars/create'>cars create</Link>
        </>
    )
}