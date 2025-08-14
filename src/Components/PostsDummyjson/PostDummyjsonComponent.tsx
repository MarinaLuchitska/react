import type {IDummyPosts} from "../../Models/Posts/Dummy.ts";
import type {FC} from "react";

type PropsPost = {item:IDummyPosts}

export const PostDummy:FC<PropsPost>=({item:{id,title,views}})=>{
    return(
        <div className="post-card">
            <div className="post-title">{id}. {title}</div>
            <div className="post-body">{views}</div>
        </div>
    )
}