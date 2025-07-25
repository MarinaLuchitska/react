import type {IPostModel} from "../../models/IPostModel.ts";
import {useEffect,useState} from "react";
import {loadPost} from "../../srvices/api.service.ts";
import {Post} from "../post-component/Post.tsx";

import './Posts.css'

export const Posts = ()=> {
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        loadPost().then(value => setPosts(value))
    }, []);
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
}






