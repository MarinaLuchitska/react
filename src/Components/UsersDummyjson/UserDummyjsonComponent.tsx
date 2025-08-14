import type {IDummyUsers} from "../../Models/Users/Dummy.ts";
import type {FC} from "react";

type PropsPost = {item:IDummyUsers}

export const UserDummy:FC<PropsPost>=({item:{id,firstName,lastName}})=>{
    return(
        <div className="post-card">
            <div className="post-title">{id}. {firstName}</div>
            <div className="post-body">{lastName}</div>
        </div>
    )
}