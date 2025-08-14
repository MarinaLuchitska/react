import type {FC} from "react";
import type {IPlaceholderComments} from "../../Models/Comments/JsonPlaceholder.ts";

type PropsPost = {item:IPlaceholderComments}

export const CommentPlaceholder:FC<PropsPost>=({item:{id,email,body}})=>{
    return(
        <div className="post-card">
            <div className="post-title">{id}. {email}</div>
            <div className="post-body">{body}</div>
        </div>
    )
}
