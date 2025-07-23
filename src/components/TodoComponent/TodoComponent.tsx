import type {FC} from "react";
import type {ITodoModels} from "../../models/TodoModels.ts";

type PropType = {todo:ITodoModels}

const Todo:FC<PropType> = ({todo:{id,title,completed}})=>{
    return <div>{id} {title} {completed.toString()}</div>
}

export {Todo}




