import type {IUserModel} from "../../models/IUserModel.ts";


interface UserProps {
    user: IUserModel
}

export const UserComponent = ({user}: UserProps) => {
    return (
        <div>{user.username}</div>
    );
};