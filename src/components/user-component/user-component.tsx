import {useNavigate} from "react-router-dom";
import type {IUserModel} from "../../models/IUserModel.ts";
import type {FC} from "react";
type Props = {
    user: IUserModel

}
export const UserComponent: FC<Props> = ({user}) => {
    const navigation = useNavigate();

    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }
    return <div>
        {user.username}: {user.email}


        <button onClick={onButtonClickNavigate}>click me
        </button>
    </div>;
}