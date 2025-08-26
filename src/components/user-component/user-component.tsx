import type {IUserModel} from "../../models/IUserModel.ts";


interface UserComponentProps {
    user: IUserModel
}

export const UserComponent = ({user}: UserComponentProps) => {
    return(
        <div>{user.id} {user.username}</div>
    )
}
