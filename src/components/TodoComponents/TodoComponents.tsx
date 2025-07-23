import './TodoComponents.css'
import type {ITodoModels} from "../../models/TodoModels.ts";
import{useEffect,useState} from "react";
import {loadTodos} from "../../services/api.serviсes.ts";
import {Todo} from "../TodoComponent/TodoComponent.tsx";


const Todos = ()=>{
    const[todos,setTodos]= useState <ITodoModels[]>([]);
        useEffect(()=>{
            loadTodos().then(value => setTodos(value));
        },[])
    return(
        <div>
            {todos.map(todo =><Todo todo={todo} key={todo.id}/>)}
        </div>
    );

}


export{Todos}