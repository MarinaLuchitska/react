import  type {IPostModel} from "../models/PostModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL+'/posts';

const loadPosts = async(): Promise<IPostModel[]> => {
    return await fetch(endpoint)
        .then(value => value.json())
}

export {loadPosts}