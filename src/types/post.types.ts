export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export type State = {
    posts: Post[];
    post: Post | null;
    comments: Comment[] | null;
    error: string | null;
    loading: boolean;
};
