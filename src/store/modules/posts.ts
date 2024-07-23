import api from "@/config/axios";
import {State, Post,Comment} from "@/types/post.types";
import {
    RESET_STATE,
    SET_COMMENTS,
    SET_ERROR,
    SET_LOADING,
    SET_POST,
    SET_POSTS,
    SET_TODO
} from "@/store/mutation.ts";
import {FETCH_COMMENTS, FETCH_POST, FETCH_POSTS} from "@/store/actions.ts";



export const getters    = {
    posts: (state: State) => state.posts as Post[],
    comments: (state: State) => state.comments as Comment[],
    post:(state: State) => state.post as Post,
};

export const mutations = {
    [SET_POSTS](state: State, posts: Post[]) {
        state.posts = posts;
    },
    [SET_POST](state: State, post: Post) {
        state.post = post;
    },
    [SET_COMMENTS](state: State, comments: Comment[]) {
        state.comments = comments;
    },
    [SET_LOADING](state: State, loading: boolean) {
        state.loading = loading;
    },
    [SET_ERROR](state: State, error: string) {
        state.error = error;
    },
    [RESET_STATE](state: State) {
        Object.assign(state, initialState);
    },
};
export const actions    = {
    async [FETCH_POSTS]({ commit},payload) {

        commit(SET_LOADING, true);
        const response = await api.get(`/users/${payload.userId}/posts`);

        if (response.status !== 200) {
            commit(SET_ERROR, response.data);
            commit(SET_LOADING, false);
            return;
        }

        commit(SET_POSTS, response.data);
        commit(SET_LOADING, false);
    },
    async [FETCH_POST]({ commit }: any, id: number) {
        commit(SET_LOADING, true);
        const response = await api.get(`/posts/${id}`);

        if (response.status !== 200) {
            commit(SET_ERROR, response.data);
            commit(SET_LOADING, false);
            return;
        }
        commit(SET_TODO, response.data);
        commit(SET_LOADING, false);
    },
    async [FETCH_COMMENTS]({commit}: any,payload) {
        commit(SET_LOADING, true);

        const id = payload.postId;

        const response = await api.get(`/posts/${id}/comments`);
        if (response.status !== 200) {
            commit(SET_ERROR, response.data);
            commit(SET_LOADING, false);
        }

        commit(SET_COMMENTS, response.data);
        commit(SET_LOADING, false);
    },
    [RESET_STATE]({ commit }: any) {
        commit(RESET_STATE);
    },
};

const initialState: State = {
    posts: [],
    post:null,
    comments:null,
    loading: false,
    error: '',
};

export const state = () => ({ ...initialState });

export default {
    state,
    getters,
    mutations,
    actions,
};

