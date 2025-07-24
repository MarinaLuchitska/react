import './Posts.css'
import {useEffect,useState} from "react";
import  type{IPostModel} from "../../models/PostModel.ts";
import {loadPosts} from "../../services/api.service.ts";
import {Post} from "../Post-component/Post.tsx";

const Posts =()=> {
    const [posts,setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        loadPosts().then(value => setPosts(value));
    },[]);
    return(
    <div className="posts-container">
        {posts.map(post => <Post post={post} key={post.id} />)}
    </div>)
}

export {Posts}
















