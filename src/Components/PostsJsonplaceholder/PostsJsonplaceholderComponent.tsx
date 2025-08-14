import type {IPlaceholderPosts} from "../../Models/Posts/JsonPlaceholder.ts";
import {useState,useEffect} from "react";
import {loadPostsPlaceholder} from "../../Servises/api.services.placeholder.ts";
import {PostPlaceholder} from "./PostJsonplaceholderComponent.tsx";

export const PostsPlaceholder = ()=> {
    const [items, setItems] = useState<IPlaceholderPosts[]>([])
    useEffect(() => {
        loadPostsPlaceholder().then(value => setItems(value))
    }, []);
    return (
        <div>
            {items.map(item => <PostPlaceholder item={item} key={item.id}/>)}
        </div>
    );
}