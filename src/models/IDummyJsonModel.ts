import type {IPostModel} from "./IPostModel.ts";

export interface IDummyJsonModel {
  posts: IPostModel[];
  total: number;
  skip: number;
  limit: number;
}