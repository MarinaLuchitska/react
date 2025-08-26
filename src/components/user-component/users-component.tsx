import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {UserComponent} from "./user-component.tsx";
import type {IUserModel} from "../../models/IUserModel.ts";
import type {IUserResModel} from "../../models/IUserResponseModel.ts";
import {userService} from "../../services/api.service.ts";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        userService(currentPage).then(({users}: IUserResModel) => {

            setUsers(users);
        });
    }, [searchParams]);
    return (
        <div>
            {users.map((user: IUserModel) => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};