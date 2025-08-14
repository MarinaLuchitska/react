import type {IDummyPosts} from "../../Models/Posts/Dummy.ts";
import {useState,useEffect} from "react";
import {loadPostsDummy} from "../../Servises/api.services.dummy.ts";
import {PostDummy} from "./PostDummyjsonComponent.tsx";

export const PostsDummy = ()=> {
    const [items, setItems] = useState<IDummyPosts[]>([])
    useEffect(() => {
        loadPostsDummy().then(value => setItems(value))
    }, []);
    return (
        <div>
            {items.map(item => <PostDummy item={item} key={item.id}/>)}
        </div>
    );
}