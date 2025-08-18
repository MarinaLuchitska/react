import type {ICart} from "./ICartModel.ts";

export interface ICartResModel {
    total: number;
    limit: number;
    skip: number;
    carts: ICart[];
}