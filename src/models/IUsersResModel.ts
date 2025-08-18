import type {IUserModel} from "./IUserModel.ts";

export interface IUserResModel {
    total: number;
    limit: number;
    skip: number;
    users: IUserModel[];
}