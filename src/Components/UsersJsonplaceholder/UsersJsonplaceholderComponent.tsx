import type {IPlaceholderUsers} from "../../Models/Users/JsonPlaceholder.ts";
import {useState,useEffect} from "react";
import {loadUsersPlaceholder} from "../../Servises/api.services.placeholder.ts";
import {UserPlaceholder} from "./UserJsonplaceholderComponent.tsx";

export const UsersPlaceholder = ()=> {
    const [users, setUsers] = useState<IPlaceholderUsers[]>([])
    useEffect(() => {
        loadUsersPlaceholder().then(value => setUsers(value))
    }, []);
    return (
        <div>
            {users.map(user => <UserPlaceholder user={user} key={user.id}/>)}
        </div>
    );
}