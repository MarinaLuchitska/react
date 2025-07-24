import type {FC} from "react";
import type {IComentModel} from "../../models/IComentModel.ts";
import './comment.css'

type PropsComment = {
    comment:IComentModel
}
 const Comment:FC<PropsComment> =({comment:{id,name,email,body}})=>{
     return (
         <div className="comment">
             <div className="comment-header">
                 {id}. {name}
                 <span className="comment-email">({email})</span>
             </div>
             <div className="comment-body">
                 {body}
             </div>
         </div>
     );
 };
export {Comment}







