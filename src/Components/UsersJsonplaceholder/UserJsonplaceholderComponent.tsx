import type {IPlaceholderUsers} from "../../Models/Users/JsonPlaceholder.ts";
import type {FC} from "react";

type PropsPost = {user:IPlaceholderUsers}

export const UserPlaceholder:FC<PropsPost>=({user:{id,name,username}})=>{
    return(
        <div className="post-card">
            <div className="post-title">{id}. {name}</div>
            <div className="post-body">{username}</div>
        </div>
    )
}

