import type { IDummyComment } from "../Models/Comments/Dummy.ts";
import type { IDummyPosts } from "../Models/Posts/Dummy.ts";
import type { IDummyUsers } from "../Models/Users/Dummy.ts";

const endpointUsersDummy = import.meta.env.VITE_API_DUMYJSON_URL + '/users';
const endpointPostsDummy = import.meta.env.VITE_API_DUMYJSON_URL + '/posts';
const endpointCommentsDummy = import.meta.env.VITE_API_DUMYJSON_URL + '/comments';

const loadUsersDummy = async (): Promise<IDummyUsers[]> => {
    const res = await fetch(endpointUsersDummy);
    const data = await res.json();
    return data.users ?? [];
};

const loadPostsDummy = async (): Promise<IDummyPosts[]> => {
    const res = await fetch(endpointPostsDummy);
    const data = await res.json();
    return data.posts ?? [];
};

const loadCommentsDummy = async (): Promise<IDummyComment[]> => {
    const res = await fetch(endpointCommentsDummy);
    const data = await res.json();
    return data.comments ?? [];
};

export { loadUsersDummy, loadPostsDummy, loadCommentsDummy };

