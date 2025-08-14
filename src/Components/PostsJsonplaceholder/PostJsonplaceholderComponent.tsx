import type {IPlaceholderPosts} from "../../Models/Posts/JsonPlaceholder.ts";
import type {FC} from "react";

type PropsPost = {item:IPlaceholderPosts}

export const PostPlaceholder:FC<PropsPost>=({item:{id,title,body}})=>{
    return(
        <div className="post-card">
            <div className="post-title">{id}. {title}</div>
            <div className="post-body">{body}</div>
        </div>
    )
}
