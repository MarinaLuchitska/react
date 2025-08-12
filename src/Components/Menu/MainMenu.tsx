import {Link} from "react-router-dom";

export const MainMenuComponent = ()=>{
    return(
        <ul>
            <p>Users</p>
            <ul>
                <li><Link to='/users/jsonplaceholder'>users-dumyjson</Link></li>
                <li><Link to='/users/dummyjson'>users-dummyjson</Link></li>
            </ul>

            <p>Posts</p>
            <ul>
                <li><Link to='/posts/jsonplaceholder'>posts-jsonplaceholder</Link></li>
                <li><Link to='/posts/dummyjson'>/posts-dummyjson</Link></li>
            </ul>

            <p>Comments</p>
            <Link to='/comments'>Comments</Link>

        </ul>
    )
}