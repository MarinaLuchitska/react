import {useEffect, useState} from "react";
import {UserComponent} from "./user-component.tsx";
import type {IUserModel} from "../../models/IUserModel.ts";
import type {IUserResModel} from "../../models/IUsersResModel.ts";
import {userService} from "../../services/servsice.ts";

export const UsersComponent=()=>{
    const [users,setUsers]=useState<IUserModel[]>([])
    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserResModel) => {
                setUsers(users);
            });

    }, []);
    return (
        <div>
            {users.map((user) => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
}