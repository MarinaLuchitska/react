import './Post.css'
import type {FC} from "react";
import type {IPostModel} from "../../models/PostModel.ts";

type PropType ={post:IPostModel}

const Post:FC<PropType> = ({post:{id,title,body}})=>{
    return(
        <div className="post-card">
            <div className="post-title">{id}. {title}</div>
            <div className="post-body">{body}</div>
        </div>
    )
}

export {Post}




