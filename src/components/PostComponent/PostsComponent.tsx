import {useEffect, useState} from "react";
import {getAll} from "../../services/getAll.services.ts";
import type {IBaseModel} from "../../models/IBaseModel.ts";
import type {IPostModel} from "../../models/IPostModel.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent=()=>{
    const [posts,setUsers]=useState<IPostModel[]>([])
    useEffect(() => {
        getAll<IBaseModel & { posts: IPostModel[] }>('/posts')
            .then(res => setUsers(res.posts));
    }, []);
    return (
        <div>
            {posts.map((post) => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
}