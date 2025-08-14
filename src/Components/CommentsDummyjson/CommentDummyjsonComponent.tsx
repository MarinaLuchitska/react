import type {FC} from "react";
import type {IDummyComment} from "../../Models/Comments/Dummy.ts";

type PropsPost = {item:IDummyComment}

export const CommentDummy:FC<PropsPost>=({item:{id,postId,likes}})=>{
    return(
        <div className="post-card">
            <div className="post-title">{id}. {postId}</div>
            <div className="post-body">{likes}</div>
        </div>
    )
}