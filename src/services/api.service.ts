import type {IUserResModel} from "../models/IUserResponseModel.ts";

const url = 'https://dummyjson.com';
export const userService = async (page: string): Promise<IUserResModel> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    const response = await fetch(url + '/users' + '?skip=' + skip)
        .then(value => value.json());

    return response;

}






