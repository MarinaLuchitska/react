import type {ITodoModels} from "../models/TodoModels.ts";

const endpoint = import.meta.env.VITE_API_URL +'/todos';

const loadTodos = async ():Promise<ITodoModels[]> =>{
    return await fetch(endpoint)
        .then(value => value.json())
}


export {loadTodos}

























