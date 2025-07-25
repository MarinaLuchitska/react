import type {IPostModel} from "../../models/IPostModel.ts";
import type {FC} from "react";

type PropsPost = {post:IPostModel}

export const Post:FC<PropsPost>=({post:{id,title,body}})=>{
    return(
        <div className="post-card">
            <div className="post-title">{id}. {title}</div>
            <div className="post-body">{body}</div>
        </div>
    )
}

