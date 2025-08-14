import type {IDummyUsers} from "../../Models/Users/Dummy.ts";
import {useState,useEffect} from "react";
import {loadUsersDummy} from "../../Servises/api.services.dummy.ts";
import {UserDummy} from "./UserDummyjsonComponent.tsx";

export const UsersDummy = ()=> {
    const [items, setItems] = useState<IDummyUsers[]>([])
    useEffect(() => {
        loadUsersDummy().then(value => setItems(value))
    }, []);
    return (
        <div>
            {items.map(item => <UserDummy item={item} key={item.id}/>)}
        </div>
    );
}