export interface IDummyPosts {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IDummyPostsReactions;
    views: number;
    userId: number;
}
export interface IDummyPostsReactions {
  likes: number;
  dislikes: number;
}

