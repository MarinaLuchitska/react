import {useEffect, useState} from "react";
import type {IUserModel} from "../../models/IUserModel.ts";
import {getAll} from "../../services/getAll.services.ts";
import type {IBaseModel} from "../../models/IBaseModel.ts";
import {UserComponent} from "./UserComponent.tsx";


export const UsersComponent=()=>{
    const [users,setUsers]=useState<IUserModel[]>([])
    useEffect(() => {
        getAll<IBaseModel & { users: IUserModel[] }>('/users')
            .then(res => setUsers(res.users));
    }, []);
    return (
        <div>
            {users.map((user) => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
}