import {useState,useEffect} from "react";
import {loadCommentsPlaceholder} from "../../Servises/api.services.placeholder.ts";
import {CommentPlaceholder} from "./CommentJsonplaceholderComponent.tsx";
import type {IPlaceholderComments} from "../../Models/Comments/JsonPlaceholder.ts";

export const CommentsPlaceholder = ()=> {
    const [items, setItems] = useState<IPlaceholderComments[]>([])
    useEffect(() => {
        loadCommentsPlaceholder().then(value => setItems(value))
    }, []);
    return (
        <div>
            {items.map(item => <CommentPlaceholder item={item} key={item.id}/>)}
        </div>
    );
}