import type {IPostModel} from "../models/IPostModel.ts";
import type {IDummyJsonModel} from "../models/IDummyJsonModel.ts";


const endpoint = import.meta.env.VITE_API_BASE_URL+'/posts'

const  loadPost = async(): Promise<IPostModel[]> =>{
    const respons:IDummyJsonModel = await fetch(endpoint)
        .then(value => value.json())
    return respons.posts
}
export {loadPost}



