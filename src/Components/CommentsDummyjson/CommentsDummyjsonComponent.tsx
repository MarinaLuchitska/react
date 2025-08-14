import {useState,useEffect} from "react";
import {loadCommentsDummy} from "../../Servises/api.services.dummy.ts";
import {CommentDummy} from "./CommentDummyjsonComponent.tsx";
import type {IDummyComment} from "../../Models/Comments/Dummy.ts";

export const CommentsDummy = ()=> {
    const [items, setItems] = useState<IDummyComment[]>([])
    useEffect(() => {
        loadCommentsDummy().then(value => setItems(value))
    }, []);
    return (
        <div>
            {items.map(item => <CommentDummy item={item} key={item.id}/>)}
        </div>
    );
}