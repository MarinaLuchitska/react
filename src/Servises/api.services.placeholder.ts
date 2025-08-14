import type {IPlaceholderUsers} from "../Models/Users/JsonPlaceholder.ts";
import type {IPlaceholderComments} from "../Models/Comments/JsonPlaceholder.ts";
import type {IPlaceholderPosts} from "../Models/Posts/JsonPlaceholder.ts";

const endpointUsersPlaceholder = import.meta.env.VITE_API_JSONPLACEHOLDER_URL +'/users';

const loadUsersPlaceholder = async ():Promise<IPlaceholderUsers[]> =>{
    return await fetch(endpointUsersPlaceholder)
        .then(value => value.json())
}

const endpointCommentsPlaceholder = import.meta.env.VITE_API_JSONPLACEHOLDER_URL +'/comments';

const loadCommentsPlaceholder = async ():Promise<IPlaceholderComments[]> =>{
    return await fetch(endpointCommentsPlaceholder)
        .then(value => value.json())
}

const endpointPostsPlaceholder = import.meta.env.VITE_API_JSONPLACEHOLDER_URL +'/comments';

const loadPostsPlaceholder = async ():Promise<IPlaceholderPosts[]> =>{
    return await fetch(endpointPostsPlaceholder)
        .then(value => value.json())
}

export {loadUsersPlaceholder,loadCommentsPlaceholder,loadPostsPlaceholder}