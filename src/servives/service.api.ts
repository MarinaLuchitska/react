import type {IComentModel} from "../models/IComentModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL+'/comments'

const loadComment = async():Promise<IComentModel[]> =>{
    return await fetch(endpoint)
        .then(value => value.json());
}

export {loadComment}