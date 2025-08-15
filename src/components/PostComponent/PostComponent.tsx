import type {IPostModel} from "../../models/IPostModel.ts";


interface PostProps {
    post: IPostModel
}

export const PostComponent = ({post}: PostProps) => {
    return (
        <div>{post.views}</div>
    );
};