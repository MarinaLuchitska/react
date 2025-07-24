import {useEffect,useState} from "react";
import type {IComentModel} from "../../models/IComentModel.ts";
import {loadComment} from "../../servives/service.api.ts";
import './comments.css'
import {Comment} from "../comment-component/comment.tsx";


const Comments = () =>{
    const[comments,setCommponents] = useState<IComentModel[]>([]);
    useEffect(() => {
        loadComment().then(value => setCommponents(value))
    }, []);
    return(
        <div>
            {comments.map(comment =><Comment comment={comment} key={comment.id}/>)}
        </div>)
        }
export {Comments}






