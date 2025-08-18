import type {IUserResModel} from "../models/IUsersResModel.ts";
import type {ICartResModel} from "../models/ICartsResModel.ts";

const baseUrl = 'https://dummyjson.com';

export const userService = {
    getAllUsers: async (): Promise<IUserResModel> => {
        return await fetch(baseUrl + '/users')
            .then(value => value.json());
    }
}
export const cartService = {
    getCartsOfUser: async (userId: string): Promise<ICartResModel> => {
        return await fetch(baseUrl + '/carts/user/' + userId)
            .then(value => value.json());
    }
}